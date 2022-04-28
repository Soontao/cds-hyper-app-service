import {
  ApplicationService,
  EntityDefinition,
  EventHook,
  Logger,
  memorized,
  mustBeArray
} from "cds-internal-tool";
import { parse } from "espree";
import { CDSContextBase } from "./CDSContextBase";

type AnyFunction = (...args: Array<any>) => any

export type HandlerInjectorOptions = {
  handler: AnyFunction,
  service: ApplicationService,
  hook: EventHook;
  entity?: EntityDefinition
};

const PARSE_CONFIGURATION = { ecmaVersion: "latest" };
/**
 * get arg names from function
 * 
 * @param {AnyFunction} f any type function, support arrow, async, plain
 * @returns {Array<string>} the arg name list of the target function
 */
export const getFunctionArgNames = memorized(function (f: AnyFunction) {
  let tree: any;
  try {
    tree = parse(f.toString(), PARSE_CONFIGURATION);
  } catch (error) {
    let fString = f.toString().trimStart();
    if (fString.startsWith("async")) {
      fString = `async function ${fString.slice("async".length)}`;
    } else {
      fString = `function ${fString}`;
    }
    tree = parse(fString, PARSE_CONFIGURATION);
  }

  const params = tree.body[0]?.expression?.params ?? tree?.body?.[0]?.params;
  return params?.map((param: any) => param.name) ?? [];
});

export class HandlerInjector extends CDSContextBase {

  protected service: ApplicationService;

  protected handler: AnyFunction;

  protected hook: EventHook;

  protected entity?: EntityDefinition;

  protected handlerLogger: Logger;

  private argsExtractor: (...args: Array<any>) => any;

  private argNames: Array<string>;

  constructor(options: HandlerInjectorOptions) {
    super();
    this.service = options.service;
    this.hook = options.hook;
    this.handler = options.handler;
    this.entity = options.entity;
    this.handlerLogger = this.cds.log(
      this.entity === undefined ? "" : `${this.hook}${this.entity?.name}`
    );
    this.argNames = getFunctionArgNames(options.handler);

    switch (this.hook) {
      case "on":
        this.argsExtractor = (...args: Array<any>) => {
          const [req, next] = args;
          return { req, next, data: mustBeArray(req.data) };
        };
        break;
      case "before":
        this.argsExtractor = (...args: Array<any>) => {
          const [req] = args;
          return { req, data: mustBeArray(req.data) };
        };
        break;
      case "after":
        this.argsExtractor = (...args: Array<any>) => {
          const [data, req] = args;
          return { req, data: mustBeArray(data) };
        };
        break;
      default:
        this.logger.warn("not supported hook", this.hook);
        throw new Error(`hook not supported ${this.hook}`);
    }
  }

  public handle(...args: Array<any>): any {
    if (this.argNames.length === 0) {
      return this.handler();
    }
    const handlerContext = Object.assign(
      {},
      {
        get context() { return this.cds.context; },
        service: this.service,
        hook: this.hook,
        cds: this.cds,
        entity: this.entity,
        logger: this.handlerLogger,
        db: this.db,
        model: this.model,
      },
      this.argsExtractor(...args)
    );
    const realArgs = this.argNames.map(argName => handlerContext[argName]);
    return this.handler(...realArgs);
  }

}

export function createInjectableHandler(options: HandlerInjectorOptions) {
  const injector = new HandlerInjector(options);
  return injector.handle.bind(injector);
}
