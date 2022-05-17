import { assert, cwdRequireCDS, fuzzy } from "cds-internal-tool";
import { ApplicationServiceExt } from "../base/ApplicationServiceExt";
import { PageExample } from "./PageExample";
import { BaseRepository } from "./Repository";

export class RepositoryExt extends ApplicationServiceExt {

  public static PageExample = PageExample;

  public static BaseRepository = BaseRepository;

  private findEntityInService(entityName: string) {
    return Object
      .values(this.srv.entities)
      .find(entity => entity.name.toLowerCase() === entityName.toLowerCase());
  }

  beforeInit(): void | Promise<void> {
    const logger = cwdRequireCDS().log(RepositoryExt.name);
    for (const prop of Object.getOwnPropertyNames(this.srv)) {
      if (
        this.srv[prop] === undefined &&
        prop.toLocaleLowerCase().endsWith("repository")
      ) {
        const entityName = prop.slice(0, prop.length - "repository".length);

        let entityDef = this.findEntityInService(entityName);
        if (entityDef === undefined) {
          entityDef = fuzzy.findEntity(entityName);
        }
        if (entityDef === undefined) {
          logger.warn(
            "repository", prop,
            "in implementation", this.srv.name,
            "do not find the entity metadata for", entityName,
            "please check the model/code"
          );
          assert.mustNotNullOrUndefined(entityDef);
        }
        this.srv[prop] = this.srv.getRepository(entityDef);
      }
    }
  }

}
