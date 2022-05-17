import { ApplicationService, assert, cwdRequireCDS, EntityDefinition, fuzzy } from "cds-internal-tool";
import { ApplicationServiceExt } from "../../base/ApplicationServiceExt";
import { createRepository } from "./Repository";

export class RepositoryExt extends ApplicationServiceExt {

  beforeInit(): void | Promise<void> { injectRepositoriesToObject(this.srv, this.srv); }

}

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

      target[prop] = createRepository(entityDef);
    }
  }

}
