/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  EventContext,
  EventHook,
  LinkedEntityDefinition
} from "cds-internal-tool";
import { getFunctionArgNames, NATIVE_HANDLER_ARGS_EXTRACTORS } from "./Args";
import { InjectContext } from "./InjectContext";
import { ApplicationServiceProvider, RepositoryProvider, ServiceProvider } from "./providers";


export type HandlerInjectorOptions = {
  handler: any;
  hook: EventHook;
  entity?: LinkedEntityDefinition;
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

  const invokeHandler = async (service: any, req: EventContext, data: any, next: any, thisValue: any) => {
    const ctx = InjectContext.New({
      entity,
      service,
      hook,
      req,
      data,
      next,
      providers: [ApplicationServiceProvider, ServiceProvider, RepositoryProvider]
    });
    return handler.apply(thisValue, await ctx.getArgs(parameterNames));
  };

  const injectableHandler = async function (...args: Array<any>): Promise<any> {
    const { req, data, next } = argsExtractor(...args);

    // @ts-ignore
    const service = this, thisValue = thisArg ?? this;

    // 'onReadEachXXXXX'
    if (each && parameterNames.includes("data")) {
      if (data?.length === 1) {
        return invokeHandler(service, req, data[0], next, thisValue);
      }
      return Promise.all((data ?? []).map(item => invokeHandler(service, req, item, next, thisValue)));
    }

    return invokeHandler(service, req, data, next, thisValue);
  };

  Object.defineProperty(injectableHandler, "name", { value: handler.name });

  return injectableHandler;
}
