/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cdsProjectRequire, cwdRequireCDS, EntityDefinition, memorized } from "cds-internal-tool";
import * as extensions from "./extension";
import { ApplicationServiceExt } from "./extension/base";
import { getOrCreateEntityHandler } from "./extension/builtIn/impl";
import { getOrCreateRepository } from "./extension/builtIn/repo/Repository";

export const getExtensionInstance = memorized(function getExtensionInstance(m: string | { impl: string }) {
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

  return new mClass(mOptions)
}, 1, 102400)

export const getExtensions = memorized(function getExtensions(service: HyperApplicationService) {
  const cds = cwdRequireCDS();
  const extensions: Array<string> = cds.env.requires?.["app-service"]?.exts ?? ["builtIn"]
  const exts: Array<ApplicationServiceExt<any>> = extensions.map(ext => getExtensionInstance(ext));

  return {
    async beforeInitAll() {
      for (const ext of exts) { await ext.beforeInit(service); }
    },
    async afterInitAll() {
      for (const ext of exts) { await ext.afterInit(service); }
    },
  };
}, 1, 102400);

/**
 * HyperApplicationService
 * 
 * support extensions for `ApplicationService`
 * 
 */
export class HyperApplicationService extends cwdRequireCDS().ApplicationService {

  async init(): Promise<any> {
    const { beforeInitAll, afterInitAll } = getExtensions(this);
    await beforeInitAll();
    await super.init();
    await afterInitAll();
  }

  /**
   * get repository shortcut from service
   * 
   * @param entityDef 
   * @returns 
   */
  public getRepository(entityDef: EntityDefinition) {
    return getOrCreateRepository(entityDef);
  }

  /**
   * get entity handler shortcut from service
   * @param entityDef 
   * @returns 
   */
  public getEntityHandler(entityDef: EntityDefinition) {
    return getOrCreateEntityHandler(this, entityDef);
  }

}


export default HyperApplicationService;
