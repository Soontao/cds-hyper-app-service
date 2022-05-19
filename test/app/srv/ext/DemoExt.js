const { cwdRequireCDS } = require("cds-internal-tool")
const { ApplicationServiceExt } = require("../../../../src")


module.exports = class DemoAppExt extends ApplicationServiceExt {
  beforeInit(srv, options) {
    srv.demologger = cwdRequireCDS().log(options.loggerName)
  }
}
