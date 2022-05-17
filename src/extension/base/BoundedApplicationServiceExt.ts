/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApplicationServiceExt } from "./ApplicationServiceExt";

/**
 * bounded application service extension
 */
export class BoundedApplicationServiceExt<O = any> extends ApplicationServiceExt<O> {

  protected exts: Array<ApplicationServiceExt> = [];

  async beforeInit(): Promise<void> {
    for (const ext of this.exts) { await ext.beforeInit(); }
  }

  async afterInit(): Promise<void> {
    for (const ext of this.exts) { await ext.afterInit(); }
  }

}
