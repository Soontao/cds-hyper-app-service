/* eslint-disable max-len */
import { cwdRequire, cwdRequireCDS, EntityDefinition, memorized } from "cds-internal-tool";
import { createRepositoryParser } from "./grammar";
import { Example, PageExample } from "./PageExample";
import { isEmptyFunction } from "./utils";

export class BaseRepository<T = any> {

  protected cds = cwdRequireCDS();

  private _entity: EntityDefinition;

  public getEntity() { return this._entity; }

  constructor(entity: EntityDefinition) {
    this._entity = entity;
  }

  public find(example: Partial<T> | PageExample<T>): Promise<Array<T>> {
    let data: any = example;
    if (example instanceof Example) {
      data = example.getExample();
    }
    let query = this.cds.ql.SELECT.from(this.getEntity()).where(data);
    if (example instanceof PageExample) {
      const page = example.getPage();
      query = query.limit(page.rows ?? 1, page.offset);
    }
    return this.cds.run(query);
  }

  /**
   * find one record for entity
   * 
   * @param example 
   * @returns object if found, null if not found
   */
  public findOne(example: Partial<T>): Promise<T | null> {
    return this.cds.run(this.cds.ql.SELECT.one.from(this.getEntity()).where(example));
  }


  /**
   * bulk creation
   * 
   * @param example 
   */
  public create(example: Array<Partial<T>>): Promise<Array<T>>

  /**
   * create single instance
   * 
   * @param example 
   */
  public create(example: Partial<T>): Promise<T>

  public create(example: any): Promise<any> {
    if (example instanceof Array) {
      return this.cds.run(this.cds.ql.INSERT.into(this.getEntity()).entries(...example)).then(() => example) as any;
    }
    return this.cds.run(this.cds.ql.INSERT.into(this.getEntity()).entries(example)).then(() => example) as any;
  }

  public remove(example: Partial<T>): Promise<number> {
    return this.cds.run(this.cds.ql.DELETE.from(this.getEntity()).where(example));
  }

  public update(example: Partial<T>, key: string | number | object): Promise<number> {
    return this.cds.run(this.cds.ql.UPDATE.entity(this.getEntity(), key).set(example));
  }

}

export const getOrCreateRepository = memorized(<T extends BaseRepository>(entity: EntityDefinition): T => {

  // TODO: cache for entity
  const cds = cwdRequireCDS();

  let repo: BaseRepository;

  const repoImpl = entity["@cds.hyper.repo"];

  if (repoImpl !== undefined) {
    repo = new (cwdRequire(entity, repoImpl))(entity);
  } else {
    repo = new BaseRepository(entity);
  }

  const methodParser = createRepositoryParser(entity);

  return new Proxy(repo, {
    get: (baseRepo, prop) => {
      // if have that property
      const target = baseRepo[prop];
      if (typeof target === "function") {
        if (!isEmptyFunction(target)) {
          return baseRepo[prop];
        }
      }

      if (target !== undefined && typeof target !== "function") { return target; }

      // if not have method
      if (typeof prop === "string") {
        const buildQuery = methodParser(prop);
        if (buildQuery !== undefined) {
          const query = (...args: Array<any>) => cds.run(buildQuery(...args));
          Object.defineProperty(query, "name", { value: prop, writable: false });
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
});
