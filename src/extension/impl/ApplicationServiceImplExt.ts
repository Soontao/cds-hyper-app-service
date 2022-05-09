import { ApplicationServiceExt } from "../base/ApplicationServiceExt";
import { HyperEntityHandler } from "./HyperEntityHandler";
import { registerForObject, registerForService } from "./register";

/**
 * support hyper @impl annotations
 */
export class ApplicationServiceImplExt extends ApplicationServiceExt {

  /**
   * alias for `HyperEntityHandler`
   */
  public static HyperEntityHandler = HyperEntityHandler;

  beforeInit(): void | Promise<void> {
    registerForService(this.srv);
    registerForObject(this.srv, this.srv);
  }

}
