
import { assert, memorized } from "cds-internal-tool";
import { parseJs } from "../base/utils";

/**
 * check function body is empty or not
 */
export const isEmptyFunction = memorized((f: any) => {

  assert.mustBeFunction(f);
  
  let tree: any;
  let fString = f.toString().trim();
  try {
    tree = parseJs(fString);
  } catch (error) {
    if (fString.startsWith("async")) {
      fString = `async function ${fString.slice("async".length)}`;
    } else {
      fString = `function ${fString}`;
    }
    tree = parseJs(fString);
  }

  if (tree === undefined) {
    throw new Error(`cannot parsing function ${fString}, please report issue`);
  }

  const body: any = tree.body[0]?.expression?.body ?? tree?.body?.[0]?.body;
  if (body === undefined) {
    return true;
  }
  if (body.type === "BlockStatement") {
    return body.body.length === 0;
  }
  return false;
});
