import { BoundedApplicationServiceExt } from "./base/BoundedApplicationServiceExt";
import { ApplicationServiceImplExt } from "./builtIn/impl";
import { RepositoryExt } from "./builtIn/repo";


/**
 * built-in bounded extension
 */
export class builtIn extends BoundedApplicationServiceExt {

  protected exts = [new ApplicationServiceImplExt(), new RepositoryExt()];

}
