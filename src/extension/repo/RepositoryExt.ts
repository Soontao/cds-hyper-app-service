import { ApplicationServiceExt } from "../base/ApplicationServiceExt";
import { PageExample } from "./PageExample";

export class RepositoryExt extends ApplicationServiceExt {

  public static PageExample = PageExample;

  beforeInit(): void | Promise<void> {
    // TODO: mount repository creator
  }

}
