import {
  ApplicationService, cwdRequire, cwdRequireCDS,
  EntityDefinition, groupByKeyPrefix
} from "cds-internal-tool";
import HyperApplicationService from "../../../HyperApplicationService";
import { ANNOTATION_IMPL, VALUES_HOOK_LIST } from "./constants";
import { parseHandlerName } from "./grammar";
import { getOrCreateEntityHandler, HyperEntityHandler } from "./HyperEntityHandler";
import { createInjectableHandler } from "./Injector/Injector";

const isBuiltInFunctions = (name: string) => {
  const { ApplicationService } = cwdRequireCDS();
  if (
    typeof (
      ApplicationService.prototype[name] ??
      HyperApplicationService.prototype[name] ??
      HyperEntityHandler.prototype[name]
    ) === "function"
  ) {
    return true;
  }
  return false;
};

/**
 * process `@impl` annotations for `cds.ApplicationService` and mount the `handlers` to it
 * @param srv 
 */
export function registerForServiceAnnotation(srv: HyperApplicationService) {


  for (const entity of srv.entities) {

    const impl = groupByKeyPrefix(entity, ANNOTATION_IMPL);

    // impl by single module/HyperEntityHandler
    if (typeof impl === "string") {
      getOrCreateEntityHandler(srv, entity);
      continue;
    }

    // impl by many modules
    if (typeof impl === "object") {
      const hooks = Object.keys(impl).filter(h => VALUES_HOOK_LIST.includes(h)) as Array<any>;

      for (const hook of hooks) {

        for (const [event, implRelativePath] of Object.entries(impl[hook])) {

          const EVENT = String(event).toUpperCase();
          const implHandler = cwdRequire(srv, implRelativePath as string);

          const register = (handler: any) => srv[hook](
            EVENT,
            entity,
            createInjectableHandler({
              hook,
              entity,
              handler,
              each: false,
            })
          );

          if (typeof implHandler === "object") {
            for (const innerHandler of Object.values(implHandler)) {
              if (typeof innerHandler === "function") {
                register(innerHandler);
              }
            }
          }

          if (typeof implHandler === "function") {
            register(implHandler);
          }

        }

      }
      //
    }
  }

}

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
      p => VALUES_HOOK_LIST.some(hook => p.toLowerCase().startsWith(hook)) && // startsWith hook name
        p !== "constructor" && // not constructor
        typeof object[p] === "function" && // is function
        !isBuiltInFunctions(p) // is not built-in functions
    );

  for (const property of properties) {
    const handler = object[property];
    const handlerInfo = parseHandlerName(property);

    if (handlerInfo.valid === true) {
      for (const hook of handlerInfo.hooks) {
        (service[hook] as any)(
          [...handlerInfo.events, ...handlerInfo.actions],
          entity === undefined ? handlerInfo.entity : entity,
          createInjectableHandler({
            handler,
            hook,
            entity: entity ?? (
              handlerInfo.entity !== undefined ? object?.entities?.[handlerInfo.entity] : undefined
            ),
            thisArg: object instanceof HyperEntityHandler ? object : undefined,
            each: handlerInfo.each,
          })
        );
      }
    }

  }

}
