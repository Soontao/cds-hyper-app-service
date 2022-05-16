import { cwdRequire, cwdRequireCDS, ServiceDefinition } from "cds-internal-tool";
import { parse } from "espree";
import path from "path";

const PARSE_CONFIGURATION = { ecmaVersion: "latest" };

/**
 * parse js code to es AST tree
 * @param jsCode 
 * @returns 
 */
export function parseJs(jsCode: string) {
  return parse(jsCode, PARSE_CONFIGURATION);
}

export const createSrvRequire = (svc: ServiceDefinition) => (...paths: Array<any>) => cwdRequire(
  path.join(
    cwdRequireCDS().options.project,
    path.dirname(svc["@source"]),
    ...paths
  )
);
