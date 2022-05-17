import { ApplicationServiceExt } from "./extension/base";
import { BoundedApplicationServiceExt } from "./extension/base/BoundedApplicationServiceExt";
import { BaseRepository, HyperEntityHandler, PageExample } from "./extension/builtIn";
import { HyperApplicationService } from "./HyperApplicationService";



export = Object.assign(
  HyperApplicationService,
  {
    BaseRepository,
    HyperEntityHandler,
    PageExample,
    HyperApplicationService,
    ApplicationServiceExt,
    BoundedApplicationServiceExt,
  }
)
