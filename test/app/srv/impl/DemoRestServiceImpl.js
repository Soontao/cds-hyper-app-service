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
   * @param {Request} req
   */
  onReadForLocation(req) {
    if (req._.req?.query?.ID) {
      const id = req._.req.query.ID;
      if (locationStore.has(id)) {
        return locationStore.get(req._.req.query.ID)
      }
      return req.error(404)
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
