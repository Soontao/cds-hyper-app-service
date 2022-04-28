import { ApplicationService, EntityDefinition } from "cds-internal-tool";
import { CDSContextBase } from "./CDSContextBase";
import { registerForObject } from "./register";


/**
 * 
 * handler for specific entity
 * 
 * the sub-class will be `singleton` globally (controlled by `cds-hyper-impl` framework)
 * 
 */
export abstract class HyperEntityHandler extends CDSContextBase {

  protected entity?: EntityDefinition;

  constructor(options: { entity: EntityDefinition; }) {
    super();
    this.entity = options.entity;
  }

  /**
   * mount entity handler to service
   * 
   * @param service 
   */
  public mount(service: ApplicationService) {
    registerForObject(this, service, this.entity);
  }

}
