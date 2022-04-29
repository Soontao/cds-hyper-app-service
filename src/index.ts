import { CDS, cwdRequire, groupByKeyPrefix } from "cds-internal-tool";
import path from "path";
import { VALUES_HOOK_LIST } from "./constants";
import { HyperEntityHandler } from "./HyperEntityHandler";
import { createInjectableHandler } from "./Injector";
export { HyperApplicationService } from "./HyperApplicationService";
export * from "./HyperEntityHandler";

const ANNOTATION = "@impl";


export function supportHyperImpl(cds: CDS) {

  cds.on("serving", srv => {

    // only for application service
    if (srv instanceof cds.ApplicationService) {

      srv.prepend(srv => {

        const srvRequire = (...paths: Array<any>) => cwdRequire(
          path.join(
            cds["options"].project,
            path.dirname(srv.definition["@source"]),
            ...paths
          )
        );

        for (const entity of srv.entities) {

          const impl = groupByKeyPrefix(entity, ANNOTATION);

          if (typeof impl === "string") {
            const entityHandler = srvRequire(impl);
            // TODO: support
            if (entityHandler.prototype instanceof HyperEntityHandler) {
              // TODO: cache make handler is singleton globally
              const handler: HyperEntityHandler = new entityHandler({ entity });
              handler.mount(srv);
              continue;
            }
            // TODO: warn
          }
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
                    service: srv,
                    handler
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
      });

    }

  });
}
