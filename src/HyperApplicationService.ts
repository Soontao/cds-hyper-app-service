/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ApplicationService, cdsProjectRequire, cwdRequireCDS, memorized } from "cds-internal-tool";
import * as extensions from "./extension";
import { ApplicationServiceExt } from "./extension";


const cds = cwdRequireCDS();

export const getExtensions = memorized((service: ApplicationService) => {
  const exts: Array<ApplicationServiceExt> = (cds.env.requires?.["app-service"]?.exts ?? [])
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
export class HyperApplicationService extends cds.ApplicationService {

  /**
   * alias for extensions
   */
  public static extensions = extensions;

  async init(): Promise<any> {
    const exts = getExtensions(this);

    for (const ext of exts) { await ext.beforeInit(); }
    await super.init();
    for (const ext of exts) { await ext.afterInit(); }
  }

}

export default HyperApplicationService;
