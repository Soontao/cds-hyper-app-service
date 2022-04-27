import { CDS, cwdRequireCDS, Logger } from "cds-internal-tool";


/**
 * CDS Context Base class
 */
export abstract class CDSContextBase {

  protected cds: CDS;

  protected logger: Logger;

  constructor() {
    this.cds = cwdRequireCDS();
    this.logger = this.cds.log(this.constructor.name);
  }

  protected get db() {
    return this.cds.db;
  }

  protected get tx() {
    return this.cds.tx;
  }

  protected get model() {
    return this.cds.model;
  }

  protected get context() {
    return this.cds.context;
  }
}
