/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  EntityDefinition,
  EventContext,
  EventHook, Logger, memorized,
  mustBeArray,
  Request,
  Service
} from "cds-internal-tool";
import { parse } from "espree";
import { CDSContextBase } from "./CDSContextBase";
import { VALUES_HOOK } from "./constants";

type AnyFunction = (...args: Array<any>) => any

export type NativeHandlerArgsExtractor = (...args: Array<any>) => { req: EventContext, data?: Array<any>, next?: any };

const NATIVE_HANDLER_ARGS_EXTRACTORS: { [key: string]: NativeHandlerArgsExtractor } = {
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
  handler: AnyFunction;
  hook: EventHook;
  entity?: EntityDefinition;
  /**
   * this arg for handler when executing
   */
  thisArg?: any;
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

  #service: Service;

  #next?: AnyFunction;

  #logger: Logger;

  constructor({ entity, service, hook, req, data, next }) {
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

  get context() {
    return this.#service["context"];
  }

  get user() { return this.#req.user; }

  get tenant() { return this.#req.tenant; }

  get locale() { return this.#req.locale; }


}


export function createInjectableHandler({ entity, hook, handler, thisArg }: HandlerInjectorOptions) {
  const argsExtractor = NATIVE_HANDLER_ARGS_EXTRACTORS[hook];

  if (argsExtractor === undefined) {
    throw new Error(`hook not supported ${hook}`);
  }

  const argNames = getFunctionArgNames(handler);

  return async function (...args: Array<any>): Promise<any> {
    const { req, data, next } = argsExtractor(...args);
    const ctx = new InjectContext({
      entity,
      // @ts-ignore
      service: this,
      hook,
      req,
      data,
      next
    });
    const realArgs = argNames.map((argName: string) => ctx[argName]);
    // @ts-ignore
    return handler.call(thisArg ?? this, ...realArgs);
  };
}
