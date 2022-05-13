/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cwdRequireCDS, EntityDefinition, fuzzy, memorized } from "cds-internal-tool";
import { DELETE, INSERT, SELECT, UPDATE } from "cds-internal-tool/lib/types/ql";
import antlr4 from "../../base/vendor/antlr4";
import RepositoryLexer from "./RepositoryLexer";
import RepositoryListener from "./RepositoryListener";
import RepositoryParser from "./RepositoryParser";

type Query = SELECT<any> | UPDATE<any> | INSERT<any> | DELETE<any>

class RepositoryInformationListener extends RepositoryListener {

  private entity: EntityDefinition;

  private cds = cwdRequireCDS();

  private createQuery!: () => Query;

  private params: Array<(query: Query, args: any) => void> = [];

  private argIndex = 0;

  private limit?: { one?: boolean, rows?: number, offset?: number };

  constructor(entity: EntityDefinition) {
    super();
    this.entity = entity;
  }

  private nextArgIndex(argNum = 1) {
    // get a temporary arg index
    const curArgIndex = this.argIndex;
    this.argIndex += argNum;
    return curArgIndex;
  }

  private toCQNLogic(logic: string, argIndex: number) {
    // for the first parameter, must use the 'where' method
    return argIndex === 0 ? "where" : logic;
  }

  private toCQNOp(op: string): string {
    switch (op) {
      case "EQUALS": case "IS":
        return "=";
      case "LIKE":
        return "like";
      default:
        break;
    }
    return "=";
  }

  private toLit(lit: string): any {
    switch (lit.toLowerCase()) {
      case "null":
        return null;
      case "true":
        return true;
      case "false":
        return false;
      default:
        break;
    }
  }


  enterFindQuery(): void {
    this.createQuery = () => {
      if (this.limit?.one === true) {
        return this.cds.ql.SELECT.one.from(this.entity);
      }
      return this.cds.ql.SELECT.from(this.entity);
    };
  }

  enterUpdateQuery(): void {
    this.createQuery = () => this.cds.ql.UPDATE.entity(this.entity);
  }

  enterDeleteQuery(): void {
    this.createQuery = () => this.cds.ql.DELETE.from(this.entity);
  }

  enterLimitExpr(ctx: any): void {
    if (ctx.ONE() !== null) {
      this.limit = { one: true };
    }
    if (ctx.topExpr()) {
      this.limit = {};
      this.limit.rows = parseInt(ctx.topExpr().NUMBER().getText(), 10);
      if (ctx.skipExpr()) {
        this.limit.offset = parseInt(ctx.skipExpr().NUMBER().getText(), 10);
      }
    }
  }

  enterFieldExpr(ctx: any): void {
    const fieldName = ctx.identifier().getText(); // TODO: map and check field is exist on entity or not
    const elementDef = fuzzy.findElement(this.entity, fieldName);
    if (elementDef === undefined) {
      throw new Error(`the field '${fieldName}' is not in entity ${this.entity.name}`);
    }
    const elementName = elementDef.name;

    const operators: Array<string> = ctx.operators().length === 0 ?
      ["EQUALS"] :
      ctx.operators().map((op: any) => op.getText().toUpperCase());

    const lit = ctx.literal()?.getText();

    const rawLogic = (ctx.logic()?.getText?.() ?? "AND").toLowerCase();
    if (operators.length === 1) {
      const [op] = operators;
      if (op === "EQUALS" || op === "IS" || op === "LIKE") {
        if (lit) {
          this.params.push((query: Query) => {
            query[this.toCQNLogic(rawLogic, this.argIndex)]({ [elementName]: { [this.toCQNOp(op)]: this.toLit(lit) } });
          });
        } else {
          const curArgIndex = this.nextArgIndex();
          this.params.push((query: Query, args: Array<any>) => {
            query[this.toCQNLogic(rawLogic, curArgIndex)]({ [elementName]: { [this.toCQNOp(op)]: args[curArgIndex] } });
          });
        }

      }
    }
    // TODO: concern about two values op like BETWEEN
  }


  public toQuery(...args: Array<any>): Query {
    const query = this.createQuery();
    // TODO: debug param values
    this.params.forEach(param => param(query, args));
    if (this.limit !== undefined) {
      // @ts-ignore
      query.limit(this.limit.rows, this.limit.offset);
    }
    return query;
  }
}

class ThrowErrorListener extends antlr4.error.ErrorListener {
  syntaxError(_recognizer: any, _offendingSymbol: any, line: string, column: string, msg: string, _e: any) {
    throw new Error("Syntax Error: line " + line + ":" + column + " " + msg);
  }
}

export const createRepositoryParser = (entity: EntityDefinition) => memorized(function (repoMethodName: string) {
  const logger = cwdRequireCDS().log("cds-hyper-app-service");

  logger.debug("parse repository query", repoMethodName);

  try {
    const chars = new antlr4.InputStream(repoMethodName);
    const lexer = new RepositoryLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    // TODO: error messages
    lexer?.["removeErrorListeners"]?.();
    const parser = new RepositoryParser(tokens);
    parser?.["removeErrorListeners"]?.();
    parser?.["addErrorListener"](new ThrowErrorListener());
    parser["buildParseTrees"] = true;
    const listener = new RepositoryInformationListener(entity);
    const tree = parser.query();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    logger.debug("parse repository query succeed", repoMethodName);
    return (...args: Array<any>) => listener.toQuery(...args);
  } catch (error) {
    logger.debug("parse repository query", repoMethodName, "failed, not a valid repository query", error);
    throw error;
  }

});
