import type { Response } from "express";
import HyperApplicationService from "../../HyperApplicationService";

export class AsyncStoreService extends HyperApplicationService {

  onReadResponse(response: Response) {
    return response.status(200).json({});
  }

}
