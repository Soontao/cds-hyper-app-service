import { CDS, cwdRequire, groupByKeyPrefix } from "cds-internal-tool";
import path from "path";
import { createInjectableHandler } from "./Injector";
export { HyperApplicationService } from "./HyperApplicationService";
export * from "./HyperEntityHandlers";

const ANNOTATION = "@impl";


export function supportHyperImpl(cds: CDS) {
  const logger = cds.log("cds-hyper-impl");

  cds.on("serving", srv => {

    // only for application service
    if (srv instanceof cds.ApplicationService) {

      srv.prepend(srv => {

        for (const entity of srv.entities) {

          const impl = groupByKeyPrefix(entity, ANNOTATION);

          if (typeof impl === "string") {
            //
          }
          if (typeof impl === "object") {
            const hooks = Object.keys(impl) as Array<any>;
            for (const hook of hooks) {

              if (typeof srv[hook] !== "function") {
                logger.warn(
                  "hook",
                  hook,
                  "is not in service",
                  srv.name,
                  "skip process"
                );
                continue;
              }

              for (const [event, implRelativePath] of Object.entries(impl[hook])) {

                const EVENT = String(event).toUpperCase();
                const implHandler = cwdRequire(
                  path.join(
                    cds["options"].project,
                    path.dirname(srv.definition["@source"]),
                    implRelativePath as string
                  )
                );

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
