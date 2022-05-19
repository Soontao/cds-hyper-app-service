/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cwdRequireCDS } from "cds-internal-tool";

export class AsyncExecutionService extends cwdRequireCDS().Service {

  public static path = "/-/async-execution";

  async init(): Promise<any> {
    // @ts-ignore
    this.on("READ", "AsyncExecution", async (req) => {
      const response = req._.res;
      return response.status(200).json({});
    });
  }

}
