import { ApplicationService, EntityDefinition } from "cds-internal-tool";
import { CDSContextBase } from "./CDSContextBase";


/**
 * handler for specific entity
 */
export abstract class EntityHandlers extends CDSContextBase {

  /**
   * application service
   */
  protected service: ApplicationService;

  protected entity?: EntityDefinition;

  // TODO: constructor inject 
  constructor(options: { service: ApplicationService, entity?: EntityDefinition; }) {
    super();
    this.service = options.service;
    this.entity = options.entity;
    this.logger = this.cds.log(this?.service?.name ?? "UnknownService");
  }

}
