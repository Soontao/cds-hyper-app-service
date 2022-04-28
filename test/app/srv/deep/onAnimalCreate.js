

/**
 * 
 * @param {import("cds-internal-tool").Request} req 
 * @param {Function} next 
 * @returns 
 */
module.exports = function f(req, next) {
  req.data.Name = req.data.Name + "1"
  return next()
}
