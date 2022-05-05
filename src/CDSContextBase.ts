import { CDS, cwdRequireCDS } from "cds-internal-tool";


/**
 * CDS Context Base class
 */
export abstract class CDSContextBase {

  protected cds: CDS;

  constructor() {
    this.cds = cwdRequireCDS();
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

}
