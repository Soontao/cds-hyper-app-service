/* eslint-disable max-len */
import { ApplicationService, cwdRequire, EntityDefinition, groupByKeyPrefix } from "cds-internal-tool";
import { injectRepositoriesToObject } from "../repo/utils";
import { ANNOTATION_IMPL } from "./constants";
import { registerForObject } from "./Register";


/**
 * 
 * handler for specific entity
 * 
 * the sub-class will be `singleton` globally (controlled by `cds-hyper-app-service` framework)
 * 
 */
export abstract class HyperEntityHandler { }

const globalEntityHandlers = new WeakMap<ApplicationService, WeakMap<EntityDefinition, HyperEntityHandler>>();

export function mountEntityHandlerToService(
  handlerClass: new (...args: Array<any>) => HyperEntityHandler,
  entity: EntityDefinition,
  service: ApplicationService
) {

  // TODO: check is sub-class of HyperEntityHandler
  const handler = new handlerClass();

  injectRepositoriesToObject(handler, service);
  registerForObject(handler, service, entity);

  return handler;
}

export function setEntityHandlerForService(service: ApplicationService, entity: EntityDefinition, handler: HyperEntityHandler) {
  getEntityHandlersForService(service).set(entity, handler);
}

export function getEntityHandlersForService(service: ApplicationService) {
  if (!globalEntityHandlers.has(service)) {
    globalEntityHandlers.set(service, new WeakMap());
  }
  return globalEntityHandlers.get(service) as WeakMap<EntityDefinition, HyperEntityHandler>;
}


export function getOrCreateEntityHandler(service: ApplicationService, entity: EntityDefinition,) {

  const handler = getEntityHandlersForService(service).get(entity);

  if (handler === undefined) {
    const impl = groupByKeyPrefix(entity, ANNOTATION_IMPL);
    // impl by single module/HyperEntityHandler
    if (typeof impl === "string") {
      const entityHandlerClass = cwdRequire(service, impl);
      if (entityHandlerClass.prototype instanceof HyperEntityHandler) {
        const handler = mountEntityHandlerToService(entityHandlerClass, entity, service);
        setEntityHandlerForService(service, entity, handler);
        return handler;
      }
    }
  } else {
    return handler;
  }

}
