const { HyperApplicationService } = require("../../../../src")

module.exports = class DemoHyperServiceImpl extends HyperApplicationService {

  /**
   * 
   * @param {Array} data 
   * @param {import("cds-internal-tool").Request} req
   */
  async beforeCreateHuman(data, req) {
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
  onCreateHuman(data, next) {
    for (const item of data) {
      item.Name = item.Name + "_processed_by_on_handler"
    }
    return next()
  }


  /**
   * 
   * @param {import("cds-internal-tool").EntityDefinition} entity 
   * @returns 
   */
  async onDeleteHuman(entity, req) {
    this.logger.debug("reject entity", entity.name)
    return req.reject(400, "delete is not allowed")
  }

}
