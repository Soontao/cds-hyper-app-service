/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ApplicationService, cdsProjectRequire, cwdRequireCDS, EntityDefinition, memorized } from "cds-internal-tool";
import * as extensions from "./extension";
import { ApplicationServiceExt } from "./extension/base";
import { getOrCreateEntityHandler } from "./extension/builtIn/impl";
import { getOrCreateRepository } from "./extension/builtIn/repo/Repository";



export const getExtensions = memorized((service: ApplicationService) => {
  const cds = cwdRequireCDS();
  const exts: Array<ApplicationServiceExt> = (cds.env.requires?.["app-service"]?.exts ?? ["builtIn"])
    .map((m: string | { impl: string }) => {
      let mImpl: string;
      let mClass: any = undefined;
      let mOptions = {};

      switch (typeof m) {
        case "string":
          mImpl = m;
          break;
        case "object":
          mImpl = m.impl;
          mOptions = m;
          break;
      }

      mClass = mImpl in extensions ? extensions[mImpl] : cdsProjectRequire(mImpl);

      if (mClass === undefined) {
        throw new TypeError(`module ${mImpl} is not defined`);
      }

      return new mClass(service, mOptions);
    });
  return exts;
});

/**
 * HyperApplicationService
 * 
 * support extensions for `ApplicationService`
 * 
 */
export class HyperApplicationService extends cwdRequireCDS().ApplicationService {

  async init(): Promise<any> {
    const exts = getExtensions(this);
    for (const ext of exts) { await ext.beforeInit(); }
    await super.init();
    for (const ext of exts) { await ext.afterInit(); }
  }

  public getRepository(entityDef: EntityDefinition) {
    return getOrCreateRepository(entityDef);
  }

  public getEntityHandler(entityDef: EntityDefinition) {
    return getOrCreateEntityHandler(this, entityDef);
  }

}


export default HyperApplicationService;
