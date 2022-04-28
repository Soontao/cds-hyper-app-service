

/**
 * 
 * @param {import("cds-internal-tool").Request} req 
 * @param {Array} data
 */
module.exports = function beforeBookCreate(req, data) {
  for (const item of data) {
    if (item.Name.length <= 10) {
      return req.reject("length book name is not enough")
    }
  }
  
}
