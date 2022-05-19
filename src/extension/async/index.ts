/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { cwdRequireCDS } from "cds-internal-tool";
import path from "path";
import { ApplicationServiceExt } from "../base";
import { AsyncStoreService } from "./AsyncStoreService";

// once import this module, mount it
// TODO: check configuration
setImmediate(() => {
  const cds = cwdRequireCDS();
  cds.serve(path.join(__dirname, "./AsyncStoreService.cds"), { silent: true })
    .with(AsyncStoreService)
    .in(cds.app);
});

export = class AsyncApplicationExt extends ApplicationServiceExt {

  // ref: http://docs.oasis-open.org/odata/odata/v4.0/os/part1-protocol/odata-v4.0-os-part1-protocol.html#_Toc372793747

  beforeInit(): void | Promise<void> {
    const cds = cwdRequireCDS();

    this.srv.on((req, next) => {
      const isAsync = req._.req.get("respond-async") === undefined;
      if (isAsync) {
        req._.res
          .status(202)
          .header("Location", "")
          .header("Retry-After", "1000");
        cds.spawn({ tenant: req.tenant, user: req.user }, async (tx) => {
          try {
            tx.dispatch(new cds.Request({ ...req }));
          } catch (error) {
            throw error;
          }
        });
        return;
      } else {
        return next();
      }
    });
  }

}
