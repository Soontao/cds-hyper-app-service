import {
  ApplicationService,
  cwdRequire,
  cwdRequireCDS,
  EntityDefinition,
  groupByKeyPrefix
} from "cds-internal-tool";
import path from "path";
import HyperApplicationService from "../../HyperApplicationService";
import { ANNOTATION_IMPL, VALUES_HOOK_LIST } from "./constants";
import { parseHandlerName } from "./grammar";
import { HyperEntityHandler } from "./HyperEntityHandler";
import { createInjectableHandler } from "./Injector";

const IGNORE_METHODS = ["init", "constructor"];

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

export function registerForService(srv: ApplicationService) {
  const cds = cwdRequireCDS();

  const srvRequire = (...paths: Array<any>) => cwdRequire(
    path.join(
      cds["options"].project,
      path.dirname(srv.definition["@source"]),
      ...paths
    )
  );

  for (const entity of srv.entities) {

    const impl = groupByKeyPrefix(entity, ANNOTATION_IMPL);

    // impl by single module
    if (typeof impl === "string") {
      const entityHandler = srvRequire(impl);
      // TODO: support
      if (entityHandler.prototype instanceof HyperEntityHandler) {
        // TODO: cache make handler is singleton globally
        const handler: HyperEntityHandler = new entityHandler({ entity });
        handler.mount(srv);
        continue;
      }
      // TODO: raw object register directly
      // TODO: warn
    }

    // impl by many modules
    if (typeof impl === "object") {
      const hooks = Object.keys(impl).filter(h => VALUES_HOOK_LIST.includes(h)) as Array<any>;

      for (const hook of hooks) {

        for (const [event, implRelativePath] of Object.entries(impl[hook])) {

          const EVENT = String(event).toUpperCase();
          const implHandler = srvRequire(implRelativePath);

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
      p => !p.startsWith("_") && // not private
        !IGNORE_METHODS.includes(p) && // not ignored
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
