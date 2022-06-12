import { BoundedApplicationServiceExt } from "./base/BoundedApplicationServiceExt";
import { ApplicationServiceImplExt } from "./builtIn/impl";
import { RepositoryExt } from "./builtIn/repo";


/**
 * built-in bounded extension
 */
export class builtIn extends BoundedApplicationServiceExt<{ hyper: any, repo: any }> {

  constructor(options) {
    super(options);
    this.exts = [new ApplicationServiceImplExt(options.hyper), new RepositoryExt(options.repo)];
  }
}
