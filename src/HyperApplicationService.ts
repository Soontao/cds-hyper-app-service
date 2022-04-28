/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cwdRequireCDS } from "cds-internal-tool";
import { parseHandlerName } from "./grammar";
import { createInjectableHandler } from "./HandlerInjector";

const IGNORE_METHODS = ["operations", "entities", "init"];

/**
 * HyperApplicationService
 * 
 * support 
 * 
 * * parameter injection
 */
export class HyperApplicationService extends cwdRequireCDS().ApplicationService {

  async init(): Promise<any> {
    
    const properties = Object
      .keys(this)
      .filter(
        p => !p.startsWith("_") && // not private
          !IGNORE_METHODS.includes(p) && // not ignored
          typeof this[p] === "function" // is function
      );

    for (const property of properties) {
      const handler = this[property];
      const handlerInfo = parseHandlerName(property);

      for (const hook of handlerInfo.hooks) {
        (this[hook] as any)(
          handlerInfo.events,
          handlerInfo.entity,
          createInjectableHandler({
            handler,
            hook,
            entity: handlerInfo.entity !== undefined ? this.entities[handlerInfo.entity] : undefined,
            service: this,
          })
        );
      }

    }

    await super.init();
  }

}

export default HyperApplicationService;
