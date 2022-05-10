/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CQN, cwdRequireCDS, EntityDefinition, memorized } from "cds-internal-tool";
import antlr4 from "../../base/vendor/antlr4";
import RepositoryLexer from "./RepositoryLexer";
import RepositoryListener from "./RepositoryListener";
import RepositoryParser from "./RepositoryParser";


class RepositoryInformationListener extends RepositoryListener {

  private entity: EntityDefinition;

  private cds = cwdRequireCDS();

  private createQuery!: () => CQN;

  private params: Array<(query: CQN, args: any) => void> = [];

  private argIndex = 0;

  constructor(entity: EntityDefinition) {
    super();
    this.entity = entity;
  }

  enterFind(): void {
    this.createQuery = () => this.cds.ql.SELECT(this.entity);
  }

  enterFieldExpr(ctx: any): void {
    const fieldName = ctx.identifier().getText();
    const operators: Array<string> = ctx.operators().length === 0 ? ["EQUALS"] : ctx.operators().map((op: any) => op.getText().toUpperCase());
    if (operators.length === 1) {
      if (operators[0] === "EQUALS" || operators[0] === "IS") {
        const curArgIndex = this.argIndex;
        this.argIndex++;
        this.params.push((query: CQN, args: Array<any>) => {
          // @ts-ignore
          query.where({ [fieldName]: args[curArgIndex] });
        });
      }
    }
    // TODO: concern about two values op like BETWEEN
  }


  toQuery(...args: Array<any>): CQN {
    const query = this.createQuery();
    this.params.forEach(param => param(query, args));
    return query;
  }
}



export const createRepositoryParser = (entity: EntityDefinition) => memorized(function (methodName: string) {
  const logger = cwdRequireCDS().log("cds-hyper-app-service");

  logger.debug("parse repository query", methodName);

  try {
    const chars = new antlr4.InputStream(methodName);
    const lexer = new RepositoryLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    lexer?.["removeErrorListeners"]?.();
    const parser = new RepositoryParser(tokens);
    parser?.["removeErrorListeners"]?.();
    parser["buildParseTrees"] = true;
    const listener = new RepositoryInformationListener(entity);
    const tree = parser.query();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    logger.debug("parse repository query succeed", methodName);
    return (...args: Array<any>) => listener.toQuery(...args);
  } catch (error) {
    logger.debug("parse repository query", methodName, "failed, not a valid repository query");
  }

});
