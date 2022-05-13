import { cwdRequireCDS, EntityDefinition } from "cds-internal-tool";
import { createRepositoryParser } from "./grammar";

export abstract class BaseRepository<T = any> {

  protected entity: EntityDefinition;

  protected cds = cwdRequireCDS();

  constructor(entity: EntityDefinition) {
    this.entity = entity;
  }

  public find(example: T): Promise<Array<T>> {
    return this.cds.run(this.cds.ql.SELECT.from(this.entity).where(example));
  }

  public findOne(example: T): Promise<T> {
    return this.cds.run(this.cds.ql.SELECT.one.from(this.entity).where(example));
  }

}


export function createRepository(entity: EntityDefinition) {

  const cds = cwdRequireCDS();

  const methodParser = createRepositoryParser(entity);

  return new Proxy({}, {
    get: (_, prop) => {
      if (typeof prop === "string") {
        const buildQuery = methodParser(prop);
        if (buildQuery !== undefined) {
          return (...args: Array<any>) => cds.run(buildQuery(...args));
        } else {
          throw new Error(`can not parse method with name ${prop}`);
        }
      } else {
        throw new Error(`can not parse method with symbol ${prop.toString()}`);
      }
    }
  });
}
