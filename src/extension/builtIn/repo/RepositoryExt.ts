import { ApplicationServiceExt } from "../../base/ApplicationServiceExt";
import { injectRepositoriesToObject } from "./utils";

export class RepositoryExt extends ApplicationServiceExt {

  beforeInit(): void | Promise<void> { injectRepositoriesToObject(this.srv, this.srv); }

}
