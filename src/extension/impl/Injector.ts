/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  assert,
  EntityDefinition,
  EventContext,
  EventHook, Logger, memorized,
  mustBeArray, Service
} from "cds-internal-tool";
import { parseJs } from "../base/utils";
import { CDSContextBase } from "./CDSContextBase";
import { VALUES_HOOK } from "./constants";

type AnyFunction = (...args: Array<any>) => any

export type NativeHandlerArgsExtractor = (...args: Array<any>) => { req: EventContext, data?: Array<any>, next?: any };

const NATIVE_HANDLER_ARGS_EXTRACTORS: { [key: string]: NativeHandlerArgsExtractor } = {
  [VALUES_HOOK.ON]: (req: EventContext, next: any) => {
    return { req, next, data: mustBeArray(req["data"]) };
  },
  [VALUES_HOOK.BEFORE]: (req: EventContext) => {
    return { req, data: mustBeArray(req["data"]), next: () => { } };
  },
  [VALUES_HOOK.AFTER]: (data: any, req: EventContext) => {
    return { req, data: mustBeArray(data), next: () => { } };
  },
};

export type HandlerInjectorOptions = {
  handler: AnyFunction;
  hook: EventHook;
  entity?: EntityDefinition;
  /**
   * this arg for handler when executing
   */
  thisArg?: any;
  each: boolean;
};

/**
 * get argument names from function object
 * 
 * @param {AnyFunction} f any type function, support arrow, async, plain
 * @returns {Array<string>} the arg name list of the target function
 */
export const getFunctionArgNames = memorized(function (f: AnyFunction) {

  assert.mustBeFunction(f);
  
  // TODO: rest arguments support
  let tree: any;
  try {
    tree = parseJs(f.toString());
  } catch (error) {
    let fString = f.toString().trimStart();
    if (fString.startsWith("async")) {
      fString = `async function ${fString.slice("async".length)}`;
    } else {
      fString = `function ${fString}`;
    }
    tree = parseJs(fString);
  }

  const params = tree.body[0]?.expression?.params ?? tree?.body?.[0]?.params;
  return params?.map((param: any) => param.name) ?? [];
});

interface InjectContextOptions<DATA = Array<any>> {
  entity?: EntityDefinition;
  service: Service;
  hook: EventHook;
  req?: EventContext;
  data?: DATA;
  next: AnyFunction;
}

export class InjectContext extends CDSContextBase {

  #req?: EventContext;

  #data: any;

  #entity?: EntityDefinition;

  #service: Service;

  #next?: AnyFunction;

  #logger: Logger;

  constructor({ entity, service, hook, req, data, next }: InjectContextOptions) {
    super();
    this.#entity = entity;
    this.#req = req;
    this.#data = data;
    this.#next = next;
    this.#service = service;
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

  get service() {
    return this.#service;
  }

  get request(): import("express").Request {
    // @ts-ignore
    return this.#req?._?.req;
  }

  get response(): import("express").Response {
    // @ts-ignore
    return this.#req?._?.res;
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }

  get context() {
    return this.#service["context"];
  }

  get user() { return this.#req?.user; }

  get tenant() { return this.#req?.tenant; }

  get locale() { return this.#req?.locale; }

  public getArgs(argNames: Array<string>) {
    return argNames.map((argName: string) => this[argName]);
  }


}

function newInjectContext(opt: InjectContextOptions) {
  return new InjectContext(opt);
}


export function createInjectableHandler({ entity, hook, handler, thisArg, each }: HandlerInjectorOptions) {
  const argsExtractor = NATIVE_HANDLER_ARGS_EXTRACTORS[hook];

  if (argsExtractor === undefined) {
    throw new Error(`hook not supported ${hook}`);
  }

  const argNames = getFunctionArgNames(handler);

  const invokeHandler = (service: any, req: EventContext, data: any, next: any, thisValue: any) => {
    const ctx = newInjectContext({ entity, service, hook, req, data, next });
    return handler.apply(thisValue, ctx.getArgs(argNames));
  };

  return async function (...args: Array<any>): Promise<any> {
    const { req, data, next } = argsExtractor(...args);
    // @ts-ignore
    const service = this, thisValue = thisArg ?? this;

    if (each && argNames.includes("data")) {
      return Promise.all((data ?? []).map(item => invokeHandler(service, req, item, next, thisValue)));
    }

    return invokeHandler(service, req, data, next, thisValue);
  };


}
