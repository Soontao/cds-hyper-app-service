import { CDS, cwdRequire, groupByKeyPrefix } from "cds-internal-tool";
import path from "path";
export * from "./EntityHandlers";

const ANNOTATION = "@impl";


export function supportHyperImpl(cds: CDS) {
  const logger = cds.log("cds-hyper-impl");

  cds.on("serving", srv => {

    srv.prepend(srv => {

      for (const entity of srv.entities) {
        const impl = groupByKeyPrefix(entity, ANNOTATION);
        if (typeof impl === "string") {
          //
        }
        if (typeof impl === "object") {
          const hooks = Object.keys(impl);
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

              if (typeof implHandler === "object") {
                for (const innerHandler of Object.values(implHandler)) {
                  if (typeof innerHandler === "function") {
                    srv[hook](EVENT, entity, innerHandler);
                  }
                }
              }

              if (typeof implHandler === "function") {
                srv[hook](EVENT, entity, implHandler);
              }

            }

          }
          //
        }
      }
    });



  });
}
