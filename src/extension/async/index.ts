/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { cwdRequireCDS, NextFunction, Request } from "cds-internal-tool";
import { randomUUID } from "crypto";
import HyperApplicationService from "../../HyperApplicationService";
import { ApplicationServiceExt } from "../base";
import { AsyncExecutionService } from "./Service";


export = class AsyncApplicationExt extends ApplicationServiceExt {

  // ref: http://docs.oasis-open.org/odata/odata/v4.0/os/part1-protocol/odata-v4.0-os-part1-protocol.html#_Toc372793747

  async beforeInit(srv: HyperApplicationService): void | Promise<void> {
    const cds = cwdRequireCDS();
    srv.on("*", async (req: Request, next: NextFunction) => {
      const asyncExecutionService: AsyncExecutionService = await cds.connect.to("AsyncExecutionService");
      if (asyncExecutionService !== undefined) {
        const isAsync = req._.req.get("respond-async") !== undefined;
        const host = req._.req.headers.host ?? "localhost";
        if (isAsync) {
          req._.res
            .status(202)
            .header("Location", `${req._.req.protocol}://${host}${AsyncExecutionService.path}/AsyncExecution?id=${randomUUID()}`)
            .header("Retry-After", "1000");

          cds.spawn({ tenant: req.tenant, user: req.user }, async (tx) => {
            try {
              tx.dispatch(new cds.Request({ ...req }));
            } catch (error) {
              throw error;
            }
          });
          return;
        }
      }
      return next();
    });
  }

}
