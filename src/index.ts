import { CDS } from "cds-internal-tool";
export * from "./EntityHandler";


export function supportHyperImpl(cds: CDS) {
  cds.on("serving", _service => {
    // 
  });
}
