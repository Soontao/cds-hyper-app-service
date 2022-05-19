/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  EntityDefinition,
  EventContext,
  EventHook
} from "cds-internal-tool";
import { getFunctionArgNames, NATIVE_HANDLER_ARGS_EXTRACTORS } from "./Args";
import { InjectContext } from "./InjectContext";
import { CDSServiceProvider, RepositoryProvider } from "./providers";


export type HandlerInjectorOptions = {
  handler: any;
  hook: EventHook;
  entity?: EntityDefinition;
  /**
   * this arg for handler when executing
   */
  thisArg?: any;
  each: boolean;
};


/**
 * create a `cds.Service` handler which automatically inject parameters
 * 
 * @param options 
 * @returns 
 */
export function createInjectableHandler({ entity, hook, handler, thisArg, each }: HandlerInjectorOptions) {
  const argsExtractor = NATIVE_HANDLER_ARGS_EXTRACTORS[hook];

  if (argsExtractor === undefined) {
    throw new Error(`hook '${hook}' is not supported`);
  }

  const parameterNames = getFunctionArgNames(handler);

  const invokeHandler = (service: any, req: EventContext, data: any, next: any, thisValue: any) => {
    const ctx = InjectContext.New({
      entity,
      service,
      hook,
      req,
      data,
      next,
      providers: [CDSServiceProvider, RepositoryProvider]
    });
    return handler.apply(thisValue, ctx.getArgs(parameterNames));
  };

  const injectableHandler = async function (...args: Array<any>): Promise<any> {
    const { req, data, next } = argsExtractor(...args);

    // @ts-ignore
    const service = this, thisValue = thisArg ?? this;

    if (each && parameterNames.includes("data")) {
      return Promise.all((data ?? []).map(item => invokeHandler(service, req, item, next, thisValue)));
    }

    return invokeHandler(service, req, data, next, thisValue);
  };

  Object.defineProperty(injectableHandler, "name", { value: handler.name });

  return injectableHandler;
}
