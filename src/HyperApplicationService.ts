/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cwdRequireCDS, DatabaseService, Logger } from "cds-internal-tool";
import { parseHandlerName } from "./grammar";
import { createInjectableHandler } from "./Injector";

const IGNORE_METHODS = ["operations", "entities", "init", "logger", "constructor"];

/**
 * HyperApplicationService
 * 
 * support 
 * 
 * * parameter injection
 * * built-in logger
 */
export class HyperApplicationService extends cwdRequireCDS().ApplicationService {

  protected logger: Logger;

  protected db: DatabaseService;

  constructor(...args: Array<any>) {
    // @ts-ignore
    super(...args);
    const cds = cwdRequireCDS();
    this.logger = cds.log(this.constructor.name);
    this.db = cds.db;
  }

  async init(): Promise<any> {

    const properties = Object
      .keys(this)
      .concat(Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
      .filter(
        p => !p.startsWith("_") && // not private
          !IGNORE_METHODS.includes(p) && // not ignored
          typeof this[p] === "function" // is function
      );

    for (const property of properties) {
      const handler = this[property];
      const handlerInfo = parseHandlerName(property);

      if (handlerInfo.valid === true) {
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

    }

    await super.init();
  }

}

export default HyperApplicationService;
