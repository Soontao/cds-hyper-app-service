/* eslint-disable @typescript-eslint/no-unused-vars */
import HyperApplicationService from "../../HyperApplicationService";

/**
 * application service extension
 */
export abstract class ApplicationServiceExt<O = any> {

  /**
   * before init, handlers registered in this method  will be invoked before the standard handlers
   */
  beforeInit(srv: HyperApplicationService, options?: O): Promise<void> | void {
    // do nothing
  }

  /**
   * after init, handlers registered in this method will be invoked after the standard handlers (if no response)
   */
  afterInit(srv: HyperApplicationService, options?: O): Promise<void> | void {
    // do nothing
  }

}
