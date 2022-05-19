import HyperApplicationService from "../../../HyperApplicationService";
import { ApplicationServiceExt } from "../../base/ApplicationServiceExt";
import { injectRepositoriesToObject } from "./utils";

export class RepositoryExt extends ApplicationServiceExt {

  beforeInit(srv: HyperApplicationService): void | Promise<void> {
    injectRepositoriesToObject(srv, srv);
  }

}
