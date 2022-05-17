const { BaseRepository, HyperApplicationService } = require("../../../../src");
const AnimalRepository = require("../repos/AnimalRepository");

module.exports = class DemoHyperServiceImpl extends HyperApplicationService {

  /**
   * @type {AnimalRepository}
   */
  demoServiceAnimalRepository = undefined;

  /**
   * @type {BaseRepository<{ID:string}>}
   */
  humanRepository = undefined;


  /**
   * 
   * @param {Array} data 
   * @param {import("cds-internal-tool").Request} req
   */
  async beforeCreateForHuman(data, req) {
    for (const item of data) {
      if (item.Name.length > 10) {
        return req.reject(400, 'human name length should not exceed 10 chars')
      }
    }
  }

  /**
   * 
   * @param {Array} data
   * @param {Function} next 
   */
  onCreateForHuman(data, next) {
    for (const item of data) {
      item.Name = item.Name + "_processed_by_on_handler"
    }
    return next()
  }


  /**
   * 
   * @param {import("cds-internal-tool").EntityDefinition} entity 
   * @param {import("cds-internal-tool").Logger} logger
   * @returns 
   */
  async onDeleteForHuman(entity, req, logger) {
    logger.debug("reject entity", entity.name)
    return req.reject(400, "delete is not allowed")
  }

  onEachActionEcho(data) {
    return data.value
  }

}
