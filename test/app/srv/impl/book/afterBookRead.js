
/**
 * 
 * @param {Array} data 
 * @param {import("cds-internal-tool").Request} req
 * @param {import("cds-internal-tool").ApplicationService} demoService
 * @param {import("../../repos/AnimalRepository")} animalRepository
 */
module.exports = async (data, req, demoService, animalRepository) => {
  if (demoService === undefined) {
    throw new Error("app-service instance inject failed")
  }
  if (animalRepository === undefined) {
    throw new Error("repository instance inject failed")
  }
  for (const item of data) {
    item.Name = item.Name + '_afterRead'
  }
}
