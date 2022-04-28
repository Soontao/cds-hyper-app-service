const { Request, EventContext, DatabaseService, EntityDefinition, ApplicationService } = require("cds-internal-tool")
const { EntityHandlers } = require("../../../src")

module.exports = class PeopleEntityHandlers extends EntityHandlers {


  /**
   * 
   * @param {Request} req 
   * @param {EventContext} context 
   * @param {DatabaseService} db 
   * @param {EntityDefinition} entity
   * @param {ApplicationService} service
   */
  beforeCreate = async (req, context, db, entity, service) => {


  }


}
