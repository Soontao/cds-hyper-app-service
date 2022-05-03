/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cwdRequireCDS } from "cds-internal-tool";
import { HyperEntityHandler } from "./HyperEntityHandler";
import { registerForObject, registerForService } from "./register";



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
export class HyperApplicationService extends cwdRequireCDS().ApplicationService {

  /**
   * alias for `EntityHandler`
   */
  public static HyperEntityHandler = HyperEntityHandler;

  async init(): Promise<any> {
    registerForService(this);
    registerForObject(this, this);
    await super.init();
  }

}

export default HyperApplicationService;
