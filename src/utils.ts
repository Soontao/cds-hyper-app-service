/* eslint-disable @typescript-eslint/no-var-requires */
import type { BaseRepository, HyperEntityHandler } from "./extension/builtIn";
import type HyperApplicationService from "./HyperApplicationService";

export function isHyperAppService(obj: any): obj is HyperApplicationService {
  return obj instanceof require("./HyperApplicationService").HyperApplicationService;
}

export function isHyperEntityHandler(obj: any): obj is HyperEntityHandler {
  return obj instanceof require("./extension/builtIn").HyperEntityHandler;
}

export function isRepository(obj: any): obj is BaseRepository {
  return obj instanceof require("./extension/builtIn").BaseRepository;
}
