

/**
 * 
 * @param {import("cds-internal-tool").Request} req 
 * @param {Array} data
 * @param {Function} next 
 * @returns 
 */
module.exports = function f(data, next) {
  for (const item of data) {
    item.Name = item.Name + "1"
  }
  return next()
}
