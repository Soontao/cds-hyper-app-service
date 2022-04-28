



/**
 * 
 * @param {Array} data 
 * @param {import("cds-internal-tool").Request} req
 */
module.exports = async (data, req) => {
  for (const item of data) {
    item.Name = item.Name + '_afterRead'
  }
}
