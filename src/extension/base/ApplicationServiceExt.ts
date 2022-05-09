/* eslint-disable @typescript-eslint/no-unused-vars */
import HyperApplicationService from "../../HyperApplicationService";

/**
 * application service extension
 */
export abstract class ApplicationServiceExt<O = any> {

  protected srv: HyperApplicationService;

  protected options?: O;

  constructor(srv: HyperApplicationService, options?: O) {
    this.srv = srv;
    this.options = options;
  }

  /**
   * before init, handlers registered in this method  will be invoked before the standard handlers
   */
  beforeInit(): Promise<void> | void {
    // do nothing
  }

  /**
   * after init, handlers registered in this method will be invoked after the standard handlers (if no response)
   */
  afterInit(): Promise<void> | void {
    // do nothing
  }

}
