const { Request } = require("cds-internal-tool");
const { randomUUID } = require("crypto");
const { HyperApplicationService } = require("../../../../src");



/**
 * @typedef {{ID:string, Name:string, Country:string, Size:number}} location
 */

/**
 * @type {Map<string,location>}
 */
const locationStore = new Map();


module.exports = class DemoRestServiceImpl extends HyperApplicationService {

  /**
   * 
   * @param {Request['_']['req']} request
   */
  onReadForLocation(request) {
    if (request.query.ID) {
      return locationStore.get(request.query.ID)
    }
    return Array.from(locationStore.values())
  }

  /**
   * 
   * @param {location} data 
   */
  onEachCreateForLocation(data) {
    if (data.ID === undefined) {
      data.ID = randomUUID()
    }
    locationStore.set(data.ID, data)
    return data
  }

}
