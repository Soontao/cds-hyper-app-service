import { CDS } from "cds-internal-tool";
export * from "./EntityHandlers";


export function supportHyperImpl(cds: CDS) {
  cds.on("serving", _service => {
    // 
  });
}
