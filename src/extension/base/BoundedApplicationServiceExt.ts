/* eslint-disable @typescript-eslint/no-unused-vars */
import HyperApplicationService from "../../HyperApplicationService";
import { ApplicationServiceExt } from "./ApplicationServiceExt";

/**
 * bounded application service extension
 */
export class BoundedApplicationServiceExt<O = any> extends ApplicationServiceExt<O> {

  protected exts: Array<ApplicationServiceExt> = [];

  async beforeInit(srv: HyperApplicationService, options: any): Promise<void> {
    for (const ext of this.exts) { await ext.beforeInit(srv, options); }
  }

  async afterInit(srv: HyperApplicationService, options: any): Promise<void> {
    for (const ext of this.exts) { await ext.afterInit(srv, options); }
  }

}
