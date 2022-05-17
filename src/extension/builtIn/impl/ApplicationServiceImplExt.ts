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

  beforeInit(): void | Promise<void> {
    registerForServiceAnnotation(this.srv);
    registerForObject(this.srv, this.srv);
  }

}
