import { ApplicationServiceExt } from "./extension/base";
import { BaseRepository, HyperEntityHandler, PageExample } from "./extension/builtIn";
import HyperApplicationService from "./HyperApplicationService";



export = Object.assign(
  HyperApplicationService,
  {
    BaseRepository,
    HyperEntityHandler,
    PageExample,
    HyperApplicationService,
    ApplicationServiceExt,
  }
)
