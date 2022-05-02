/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cwdRequireCDS, DatabaseService, Logger } from "cds-internal-tool";
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
class HyperApplicationService extends cwdRequireCDS().ApplicationService {

  public static HyperEntityHandler = HyperEntityHandler;

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
    registerForService(this);
    registerForObject(this, this);
    await super.init();
  }

}

export = HyperApplicationService
