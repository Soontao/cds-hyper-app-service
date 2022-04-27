// @ts-nocheck
import { EventHook, EventName, memorized } from 'cds-internal-tool';
import HandlerNameLexer from './HandlerNameLexer';
import HandlerNameListener from "./HandlerNameListener";
import HandlerNameParser from './HandlerNameParser';
import antlr4 from './vendor/antlr4';


interface HandlerNameInformation {
  hooks: Array<EventHook>;
  events: Array<EventName>
  entity?: string;
}

class HandlerNameInformationListener extends HandlerNameListener {

  private entity?: string;
  private events: Array<EventName> = [];
  private hooks: Array<EventHook> = []

  exitHook(ctx: any): void {
    // only direct level hook
    if (ctx.parentCtx instanceof HandlerNameParser.NameContext) {
      const hook = ctx.getText()
      if (hook !== undefined) {
        this.hooks.push(String(hook).toLowerCase())
      }
    }
  }

  exitEvent(ctx: any): void {
    const event = ctx.getText()
    if (event !== undefined) {
      this.events.push(String(event).toUpperCase())
    }
  }

  exitEntity(ctx: any): void {
    const entity = ctx.getText()
    if (entity !== undefined) {
      this.entity = entity
    }
  }

  /**
   * get the final information
   */
  public information(): HandlerNameInformation {
    const info: HandlerNameInformation = { hooks: this.hooks, events: this.events }
    if (this.entity !== undefined) {
      info.entity = this.entity
    }
    return info
  }
}


export const parseHandlerName = memorized(function parseName(name: string) {
  const chars = new antlr4.InputStream(name);
  const lexer = new HandlerNameLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new HandlerNameParser(tokens);
  parser['buildParseTrees'] = true;
  const listener = new HandlerNameInformationListener()
  const tree = parser.name()
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree)
  return listener.information()
})
