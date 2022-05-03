import {
  ApplicationService, EntityDefinition,
  EventContext,
  EventHook, Logger, memorized,
  mustBeArray,
  Request
} from "cds-internal-tool";
import { parse } from "espree";
import { CDSContextBase } from "./CDSContextBase";
import { VALUES_HOOK } from "./constants";

type AnyFunction = (...args: Array<any>) => any

export type NativeHandlerArgsExtractor = (...args: Array<any>) => { req: EventContext, data?: Array<any>, next?: any };

const NATIVE_HANDLER_ARGS_EXTRACTORS = {
  [VALUES_HOOK.ON]: (req: EventContext, next: any) => {
    return { req, next, data: mustBeArray(req["data"]) };
  },
  [VALUES_HOOK.BEFORE]: (req: EventContext) => {
    return { req, data: mustBeArray(req["data"]) };
  },
  [VALUES_HOOK.AFTER]: (data: any, req: EventContext) => {
    return { req, data: mustBeArray(data) };
  },
};

export type HandlerInjectorOptions = {
  handler: AnyFunction,
  service: ApplicationService,
  hook: EventHook;
  entity?: EntityDefinition
};

const PARSE_CONFIGURATION = { ecmaVersion: "latest" };
/**
 * get argument names from function object
 * 
 * @param {AnyFunction} f any type function, support arrow, async, plain
 * @returns {Array<string>} the arg name list of the target function
 */
export const getFunctionArgNames = memorized(function (f: AnyFunction) {
  // TODO: rest arguments support
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

export class InjectContext extends CDSContextBase {

  #req: Request;

  #data: Array<any>;

  #entity: EntityDefinition;

  #next?: AnyFunction;

  #logger: Logger;

  constructor({ entity, service, hook, req, data, next }) {
    super();
    this.#entity = entity;
    this.#req = req;
    this.#data = data;
    this.#next = next;
    this.#logger = this.cds.log(
      [service?.name, hook, entity?.name].filter(v => v !== undefined).join("-")
    );
  }

  get logger() {
    return this.#logger;
  }

  get entity() {
    return this.#entity;
  }

  get req() {
    return this.#req;
  }

  get request(): import("express").Request {
    return this.#req?._?.req;
  }

  get response(): import("express").Response {
    return this.#req?._?.res;
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }

  get context() { return this.cds.context; }

  get user() { return this.#req.user; }

  get tenant() { return this.#req.tenant; }

  get locale() { return this.#req.locale; }


}

export class HandlerInjector extends CDSContextBase {

  protected service: ApplicationService;

  protected handler: AnyFunction;

  protected hook: EventHook;

  protected entity?: EntityDefinition;


  private nativeHandlerArgsExtractor: NativeHandlerArgsExtractor;

  private argNames: Array<string>;

  constructor(options: HandlerInjectorOptions) {
    super();
    this.service = options.service;
    this.hook = options.hook;
    this.handler = options.handler;
    this.entity = options.entity;

    this.argNames = getFunctionArgNames(options.handler);

    this.nativeHandlerArgsExtractor = NATIVE_HANDLER_ARGS_EXTRACTORS[this.hook];

    if (this.nativeHandlerArgsExtractor === undefined) {
      throw new Error(`hook not supported ${this.hook}`);
    }

  }

  private createCtx(...args: Array<any>) {
    const { req, data, next } = this.nativeHandlerArgsExtractor(...args);
    return new InjectContext({
      entity: this.entity,
      service: this.service,
      hook: this.hook,
      req,
      data,
      next
    });
  }

  public handle(...args: Array<any>): any {
    if (this.argNames.length === 0) {
      return this.handler();
    }

    const ctx = this.createCtx(...args);
    const realArgs = this.argNames.map(argName => ctx[argName]);
    return this.handler(...realArgs);
  }

}

export function createInjectableHandler(options: HandlerInjectorOptions) {
  const injector = new HandlerInjector(options);
  return injector.handle.bind(injector);
}
