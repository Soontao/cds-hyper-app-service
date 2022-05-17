import { ApplicationService, EntityDefinition } from "cds-internal-tool";
import { injectRepositoriesToObject } from "../repo/RepositoryExt";
import { registerForObject } from "./Register";


/**
 * 
 * handler for specific entity
 * 
 * the sub-class will be `singleton` globally (controlled by `cds-hyper-app-service` framework)
 * 
 */
export abstract class HyperEntityHandler {

  protected entity: EntityDefinition;

  constructor(entity: EntityDefinition) {
    this.entity = entity;
  }

  /**
   * mount entity handler to service
   * 
   * @param service 
   */
  public mount(service: ApplicationService) {
    injectRepositoriesToObject(this, service);
    registerForObject(this, service, this.entity);
  }

}


export function mountEntityHandlerToService(
  handlerClass: new (...args: Array<any>) => HyperEntityHandler,
  entity: EntityDefinition,
  service: ApplicationService
) {
  new handlerClass(entity).mount(service);
}
