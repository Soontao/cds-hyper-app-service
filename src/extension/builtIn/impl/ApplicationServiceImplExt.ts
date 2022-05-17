import { ApplicationServiceExt } from "../../base/ApplicationServiceExt";
import { registerForObject, registerForService } from "./Register";

/**
 * support hyper @impl annotations
 * 
 * * function name parser and automatically register
 * * parameter injection
 * * built-in logger
 */
export class ApplicationServiceImplExt extends ApplicationServiceExt {

  beforeInit(): void | Promise<void> {
    registerForService(this.srv);
    registerForObject(this.srv, this.srv);
  }

}
