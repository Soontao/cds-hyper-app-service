import { cwdRequireCDS, EventHook, EventName, memorized } from "cds-internal-tool";
import HandlerNameLexer from "./HandlerNameLexer";
import HandlerNameListener from "./HandlerNameListener";
import HandlerNameParser from "./HandlerNameParser";
import antlr4 from "./vendor/antlr4";


type HandlerNameInformation = {
  hooks: Array<EventHook>;
  events: Array<EventName>
  actions: Array<string>;
  entity?: string;
  valid: boolean;
  each: boolean;
}

class HandlerNameInformationListener extends HandlerNameListener {

  private entity?: string;

  private events: Array<EventName> = [];

  private hooks: Array<EventHook> = [];

  private actions: Array<string> = [];

  private each = false;

  exitHook(ctx: any): void {
    // only direct level hook
    if (
      ctx.parentCtx instanceof HandlerNameParser.EventHandlerContext ||
      ctx.parentCtx instanceof HandlerNameParser.ActionHandlerContext
    ) {
      const hook = ctx.getText();
      if (hook !== undefined) {
        this.hooks.push(String(hook).toLowerCase() as any);
      }
    }
  }

  exitEvent(ctx: any): void {
    const event = ctx.getText();
    if (event !== undefined) {
      this.events.push(String(event).toUpperCase() as any);
    }
  }

  exitActionName(ctx: any): void {
    const action = ctx.getText();
    if (action !== undefined) {
      this.actions.push(action);
    }
  }

  exitEntityName(ctx: any): void {
    const entity = ctx.getText();
    if (entity !== undefined) {
      this.entity = entity;
    }
  }

  exitEach(_ctx: any): void {
    this.each = true;
  }

  /**
   * get the final information
   */
  public information(): HandlerNameInformation {
    const info: HandlerNameInformation = {
      hooks: this.hooks,
      events: this.events,
      actions: this.actions,
      valid: true,
      each: this.each,
    };
    if (this.entity !== undefined) {
      info.entity = this.entity;
    }
    return info;
  }
}


/**
 * parse handler information from function name, return {valid:true} is name looks like a handler
 */
export const parseHandlerName = memorized(function (name: string) {
  const logger = cwdRequireCDS().log("cds-hyper-app-service");

  logger.debug("parse handler name", name);

  try {
    const chars = new antlr4.InputStream(name);
    const lexer = new HandlerNameLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    lexer?.["removeErrorListeners"]?.();
    const parser = new HandlerNameParser(tokens);
    parser?.["removeErrorListeners"]?.();
    parser["buildParseTrees"] = true;
    const listener = new HandlerNameInformationListener();
    const tree = parser.name();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    const info = listener.information();
    logger.debug("parse handler name succeed", name, "information", info);
    return info;
  } catch (error) {
    logger.debug("parse handler name", name, "failed, not a valid handler name");
    return { valid: false, events: [], hooks: [], actions: [], entity: undefined, each: false };
  }



});
