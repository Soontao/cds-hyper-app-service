import { ApplicationService, EntityDefinition } from "cds-internal-tool";
import { parseHandlerName } from "./grammar";
import { createInjectableHandler } from "./Injector";

const IGNORE_METHODS = ["operations", "entities", "init", "logger", "constructor"];

/**
 * register handler object to service
 * 
 * @param object object have many handler methods
 * @param service cds application service
 * @param entity force restrict the entity for event
 */
export function registerForObject(object: any, service: ApplicationService, entity?: EntityDefinition) {
  const properties = Object
    .keys(object)
    .concat(Object.getOwnPropertyNames(Object.getPrototypeOf(object)))
    .filter(
      p => !p.startsWith("_") && // not private
        !IGNORE_METHODS.includes(p) && // not ignored
        typeof object[p] === "function" // is function
    );

  for (const property of properties) {
    const handler = object[property];
    const handlerInfo = parseHandlerName(property);

    if (handlerInfo.valid === true) {
      for (const hook of handlerInfo.hooks) {
        (service[hook] as any)(
          handlerInfo.events,
          entity === undefined ? handlerInfo.entity : entity,
          createInjectableHandler({
            handler,
            hook,
            entity: entity ?? (
              handlerInfo.entity !== undefined ? object?.entities?.[handlerInfo.entity] : undefined
            ),
            service,
          })
        );
      }
    }

  }

}
