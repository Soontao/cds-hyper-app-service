/* eslint-disable @typescript-eslint/no-unused-vars */
import HyperApplicationService from "../../HyperApplicationService";

/**
 * application service extension
 */
export abstract class ApplicationServiceExt<O = any> {


  protected options: O;

  constructor(options: O) {
    this.options = options
  }

  /**
   * before init, handlers registered in this method  will be invoked before the standard handlers
   */
  beforeInit(srv: HyperApplicationService): Promise<void> | void {
    // do nothing
  }

  /**
   * after init, handlers registered in this method will be invoked after the standard handlers (if no response)
   */
  afterInit(srv: HyperApplicationService): Promise<void> | void {
    // do nothing
  }

}
