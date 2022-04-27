import { CDS, groupByKeyPrefix } from "cds-internal-tool";
export * from "./EntityHandlers";

const ANNOTATION = "@impl";


export function supportHyperImpl(cds: CDS) {
  cds.on("serving", srv => {

    for (const entity of srv.entities) {
      const impl = groupByKeyPrefix(entity, ANNOTATION);
      if (typeof impl === "string") {
        //
      }
      if (typeof impl === "object") {
        //
      }
    }

  });
}
