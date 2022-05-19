import HyperApplicationService from "../../../HyperApplicationService";
import { ApplicationServiceExt } from "../../base/ApplicationServiceExt";
import { registerForObject, registerForServiceAnnotation } from "./Register";

/**
 * support hyper @impl annotations
 * 
 * * function name parser and automatically register
 * * parameter injection
 * * built-in logger
 */
export class ApplicationServiceImplExt extends ApplicationServiceExt {

  beforeInit(srv: HyperApplicationService): void | Promise<void> {
    registerForServiceAnnotation(srv);
    registerForObject(srv, srv);
  }
  
}
