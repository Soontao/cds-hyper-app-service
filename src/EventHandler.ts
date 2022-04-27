import {
  CQN, EntityDefinition, EventContext,
  isCDSRequest, Request, Service
} from "cds-internal-tool";
import { CDSContextBase } from "./CDSContextBase";


export abstract class EventHandler extends CDSContextBase {

  protected service: Service;

  protected entity?: EntityDefinition;

  constructor(options: { service: Service, entity?: EntityDefinition }) {
    super();
    this.service = options.service;
    this.entity = options.entity;
  }

  /**
   * validate the handler is accepted the inbound parameters 
   * 
   * @param _args 
   */
  accept(..._args: Array<any>): boolean {
    return true;
  }

  abstract handle(...args: Array<any>): any;

}

export abstract class RequestHandler extends EventHandler {

  accept(event: EventContext) {
    // only accept CDS Request
    return isCDSRequest(event);
  }

}

// >>> ON

export abstract class OnEventHandler<T = any> extends EventHandler {

  abstract handle(event: EventContext, next?: () => Promise<T>): Promise<T> | T

}


export abstract class OnRequestHandler<T = any> extends RequestHandler {


  abstract handle(req: Request, next?: () => Promise<T>): Promise<T> | T

}

// >>> BEFORE

export abstract class BeforeEventHandler<T = any> extends EventHandler {

  abstract handle(event: EventContext): Promise<T> | Promise<CQN> | CQN | T

}

export abstract class BeforeRequestHandler<T = any> extends RequestHandler {

  abstract handle(req: Request): Promise<T> | Promise<CQN> | CQN | T

}

// >>> AFTER

export abstract class AfterEventHandler<T = any> extends EventHandler {

  abstract handle(data: T, event: EventContext): Promise<T> | Promise<CQN> | void | T

}

export abstract class AfterRequestHandler<T = any> extends RequestHandler {

  abstract handle(data: T, req: Request): Promise<T> | Promise<CQN> | void | T

}

