import { assert, EventContext, memorized, mustBeArray } from "cds-internal-tool";
import { parseJs } from "../../../base";
import { VALUES_HOOK } from "../constants";

export type NativeHandlerArgsExtractor = (...args: Array<any>) => { req: EventContext, data?: Array<any>, next?: any };

export const NATIVE_HANDLER_ARGS_EXTRACTORS: { [key: string]: NativeHandlerArgsExtractor } = {
  [VALUES_HOOK.ON]: (req: EventContext, next: any) => {
    return { req, next, data: mustBeArray(req["data"]) };
  },
  [VALUES_HOOK.BEFORE]: (req: EventContext) => {
    return {
      req, data: mustBeArray(req["data"]), next: () => {
        //
      }
    };
  },
  [VALUES_HOOK.AFTER]: (data: any, req: EventContext) => {
    return {
      req, data: mustBeArray(data), next: () => {
        //
      }
    };
  },
};


/**
 * get the argument parameters names from function object
 * 
 * @param {any} f any type function, support arrow, async, plain
 * @returns {Array<string>} the arg name list of the target function
 */
export const getFunctionArgNames = memorized(function (f: any) {

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
