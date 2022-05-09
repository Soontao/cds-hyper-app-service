/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cwdRequire, cwdRequireCDS } from "cds-internal-tool";
import * as extensions from "./extension";
import { ApplicationServiceExt } from "./extension";


const cds = cwdRequireCDS();

/**
 * HyperApplicationService
 * 
 * sub-class of `cds.ApplicationService`
 * 
 * support 
 * 
 * * function name parser and automatically register
 * * parameter injection
 * * built-in logger
 */
export class HyperApplicationService extends cds.ApplicationService {

  /**
   * alias for extensions
   */
  public static extensions = extensions;

  async init(): Promise<any> {
    const exts: Array<ApplicationServiceExt> = (cds.env.requires?.["app-service"]?.exts ?? [])
      .map((m: string) => m in extensions ? extensions[m] : cwdRequire(m))
      .map((c: any) => new c(this));

    for (const ext of exts) { await ext.beforeInit(); }
    await super.init();
    for (const ext of exts) { await ext.afterInit(); }
  }

}

export default HyperApplicationService;
