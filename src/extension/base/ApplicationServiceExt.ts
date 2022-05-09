/* eslint-disable @typescript-eslint/no-unused-vars */
import HyperApplicationService from "../../HyperApplicationService";

/**
 * application service extension
 */
export abstract class ApplicationServiceExt {

  protected srv: HyperApplicationService;

  constructor(srv: HyperApplicationService) {
    this.srv = srv;
  }

  beforeInit(): Promise<void> | void {
    // do nothing
  }

  afterInit(): Promise<void> | void {
    // do nothing
  }

}
