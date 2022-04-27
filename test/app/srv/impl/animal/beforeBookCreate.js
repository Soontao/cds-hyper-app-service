

/**
 * 
 * @param {import("cds-internal-tool").Request} req 
 */
module.exports = function beforeBookCreate(req) {
  if (req.data.Name.length <= 10) {
    return req.reject("length book name is not enough")
  }
}
