import {
  ApplicationService,
  EntityDefinition,
  EventContext,
  EventHook, isCDSRequest, Logger
} from "cds-internal-tool";
import { CDSContextBase } from "../CDSContextBase";
import { ParameterInjectProvider } from "./ParameterInjectProvider";


interface InjectContextOptions<DATA = Array<any>> {
  entity?: EntityDefinition;
  service: ApplicationService;
  hook: EventHook;
  req?: EventContext;
  data?: DATA;
  providers?: Array<ParameterInjectProvider>;
  next: any;
}

export class InjectContext extends CDSContextBase {

  #req?: EventContext;

  #data: any;

  #entity?: EntityDefinition;

  #service: ApplicationService;

  #next?: any;

  #logger: Logger;

  #providers: Array<ParameterInjectProvider>;

  constructor({ entity, service, hook, req, data, next, providers }: InjectContextOptions) {
    super();
    this.#entity = entity;
    this.#req = req;
    this.#data = data;
    this.#next = next;
    this.#service = service;
    this.#providers = providers ?? [];
    this.#logger = this.cds.log(
      [service?.name, hook, entity?.name].filter(v => v !== undefined).join("-")
    );
  }

  get logger() {
    return this.#logger;
  }

  get entity() {
    if (this.#entity !== undefined) {
      return this.model.definitions[this.#entity?.name];
    }
  }

  get req() {
    return this.#req;
  }

  get service() {
    return this.#service;
  }

  get model() {
    // for mtx extensibility, must get model from current context service
    return this.#service.model;
  }

  get request(): import("express").Request | undefined {
    if (isCDSRequest(this.#req)) {
      return this.#req?._?.req;
    }
  }

  get response(): import("express").Response | undefined {
    if (isCDSRequest(this.#req)) {
      return this.#req?._?.res;
    }
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }

  get context() {
    return this.#service["context"];
  }

  get user() { return this.#req?.user; }

  get tenant() { return this.#req?.tenant; }

  get locale() { return this.#req?.locale; }

  public async getArgs(argNames: Array<string>) {

    const args: Array<any> = []

    for (const argName of argNames) {
      // if built-in objects
      if (argName in this) {
        args.push(this[argName]);
        continue;
      }
      
      // if configurable objects
      let provided = false
      for (const provider of this.#providers) {
        if (provider.match(argName, this)) {
          let value = provider.provide(argName, this);
          if (value instanceof Promise) { value = await value };
          args.push(value);
          provided = true
          break;
        }
      }
      
      if (provided) {
        continue
      }
      
      this.logger.debug("context cannot provide the value of", argName, 'will be undefined')
      args.push(undefined)
    }

    return args

  }

  /**
   * new instance of InjectContext
   * 
   * @param opt 
   * @returns 
   */
  public static New(opt: InjectContextOptions) {
    return new InjectContext(opt);
  }

}
