const { extensions: { repo: { BaseRepository } } } = require("../../../../src");

/**
 * @typedef {{ID:string,Name:string,Age:number}} Animal
 */

/**
 * @extends {BaseRepository<Animal>}
 */
class AnimalRepository extends BaseRepository {

  /**
   * find one animal by name
   * 
   * @param {string} name
   * @returns {Promise<Animal|null>}
   */
  findOneByName(name) { /** processed by framework */ }

}


module.exports = AnimalRepository
