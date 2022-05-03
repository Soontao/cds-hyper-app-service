const { Request, EventContext, DatabaseService, EntityDefinition, ApplicationService } = require("cds-internal-tool")
const { HyperEntityHandler } = require("../../../../src")

module.exports = class PeopleEntityHandlers extends HyperEntityHandler {


  /**
   * 
   * @param {Request} req 
   * @param {EventContext} context 
   * @param {DatabaseService} db 
   * @param {EntityDefinition} entity
   * @param {ApplicationService} service
   * @param {Array} data
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   */
  async beforeCreate(req, context, db, entity, service, data, request, response) {
    for (const item of data) {
      if (item.Name.length <= 10) {
        return req.reject(400, "length people name is not enough")
      }
    }
  }


}
