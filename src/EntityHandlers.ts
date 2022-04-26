import { ApplicationService, CDS, cwdRequire, DatabaseService, EventContext, Logger, Service } from "cds-internal-tool";


/**
 * handler for specific entity
 */
export class EntityHandlers {

  /**
   * application service
   */
  protected service: ApplicationService;

  /**
   * database service
   */
  protected db: DatabaseService;

  /**
   * logger
   */
  protected logger: Logger;

  // TODO: constructor inject 
  constructor(service: ApplicationService, db: DatabaseService) {
    const cds: CDS = cwdRequire("@sap/cds");
    this.service = service;
    this.db = db;
    this.logger = cds.log(service?.name ?? "UnknownService");
  }

  protected tx(...args: Parameters<Service["tx"]>) {
    return this.service.tx(...args);
  }

  protected get model() {
    return this.service.model;
  }

  protected get context(): EventContext {
    return cwdRequire("@sap/cds").context;
  }

  beforeRead?(): Promise<void>;

  beforeCreate?(): Promise<void>;

  beforeUpdate?(): Promise<void>;

  beforeDelete?(): Promise<void>;

  onRead?(): Promise<void>;

  onCreate?(): Promise<void>;

  onUpdate?(): Promise<void>;

  onDelete?(): Promise<void>;

  afterRead?(): Promise<void>;

  afterCreate?(): Promise<void>;

  afterUpdate?(): Promise<void>;

  afterDelete?(): Promise<void>;

}
