/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cwdRequireCDS, DatabaseService, Logger } from "cds-internal-tool";
import { registerForObject } from "./register";


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
    registerForObject(this, this);
    await super.init();
  }

}

export default HyperApplicationService;
