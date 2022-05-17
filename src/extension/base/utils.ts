import { parse } from "espree";

const PARSE_CONFIGURATION = { ecmaVersion: "latest" };

/**
 * parse js code to es AST tree
 * @param jsCode 
 * @returns 
 */
export function parseJs(jsCode: string) {
  return parse(jsCode, PARSE_CONFIGURATION);
}
