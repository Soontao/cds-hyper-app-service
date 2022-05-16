/* eslint-disable max-len */
import { cwdRequireCDS, EntityDefinition } from "cds-internal-tool";
import { createRepositoryParser } from "./grammar";

export class BaseRepository<T = any> {

  protected cds = cwdRequireCDS();

  #entity: EntityDefinition;

  #methodParser: ReturnType<typeof createRepositoryParser>;

  public getEntity() { return this.#entity; }

  public getMethodParser() { return this.#methodParser; }

  constructor(entity: EntityDefinition) {
    this.#entity = entity;
    this.#methodParser = createRepositoryParser(entity);
  }

  public find(example: Partial<T>): Promise<Array<T>> {
    return this.cds.run(this.cds.ql.SELECT.from(this.#entity).where(example));
  }

  public findOne(example: Partial<T>): Promise<T> {
    return this.cds.run(this.cds.ql.SELECT.one.from(this.#entity).where(example));
  }

}

export function createRepository<T extends BaseRepository, I = any>(entity: EntityDefinition, repoClass?: new (...args: Array<any>) => T): T & I {

  const cds = cwdRequireCDS();

  const repo = new (repoClass ?? BaseRepository)(entity);
  
  return new Proxy(repo, {
    get: (baseRepo, prop) => {
      // if have that property
      if (prop in baseRepo) { return baseRepo[prop]; }
      // if not have method
      if (typeof prop === "string") {
        const buildQuery = repo.getMethodParser()(prop);
        if (buildQuery !== undefined) {
          const query = (...args: Array<any>) => cds.run(buildQuery(...args));
          query.name = prop;
          baseRepo[prop] = query;
          return query;
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    }
  }) as any;
}
