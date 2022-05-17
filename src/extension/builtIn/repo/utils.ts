
import { ApplicationService, assert, cwdRequireCDS, EntityDefinition, fuzzy, memorized } from "cds-internal-tool";
import { parseJs } from "../../base/utils";
import { getOrCreateRepository } from "./Repository";

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

// TODO: move to cds-internal-tools
function findEntityInService(srv: ApplicationService, entityName: string) {
  return Object
    .values(srv.entities)
    .find(entity => entity.name.toLowerCase() === entityName.toLowerCase());
}


/**
 * inject repositories into target object
 * 
 * @param target target object, scan the `undefined` repository elements
 * @param srv optional `cds.Service` context, could be used to find the entity definition by name
 */
export function injectRepositoriesToObject(target: any, srv?: ApplicationService) {

  assert.mustNotNullOrUndefined(target);

  const logger = cwdRequireCDS().log("applyRepositoriesToObject");
  for (const prop of Object.getOwnPropertyNames(target)) {
    if (
      target[prop] === undefined &&
      prop.toLocaleLowerCase().endsWith("repository")
    ) {
      const describer = Object.getOwnPropertyDescriptor(target, prop);
      
      if (describer?.writable) {

        const entityName = prop.slice(0, prop.length - "repository".length);

        let entityDef: EntityDefinition | undefined = undefined;

        if (srv !== undefined) {
          entityDef = findEntityInService(srv, entityName);
        }

        if (entityDef === undefined) {
          entityDef = fuzzy.findEntity(entityName);
        }

        if (entityDef === undefined) {
          logger.warn(
            "repository", prop,
            "do not find the entity metadata for", entityName,
            "please check the model/code"
          );
          assert.mustNotNullOrUndefined(entityDef);
        }

        Object.defineProperty(target, prop, { get: () => getOrCreateRepository(entityDef as any), });

      }

    }
  }

}
