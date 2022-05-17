import type HyperApplicationService from "../HyperApplicationService";
import { ApplicationServiceExt } from "./base";
import { BoundedApplicationServiceExt } from "./base/BoundedApplicationServiceExt";
import { ApplicationServiceImplExt } from "./builtIn/impl";
import { RepositoryExt } from "./builtIn/repo";



export class builtIn extends BoundedApplicationServiceExt {
  protected exts: ApplicationServiceExt<any>[];

  constructor(srv: HyperApplicationService, options: any) {
    super(srv, options);
    this.exts = [new ApplicationServiceImplExt(srv, options), new RepositoryExt(srv, options)];
  }
}
