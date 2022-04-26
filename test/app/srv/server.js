const cds = require("@sap/cds");
const { supportHyperImpl } = require("../../../src");

supportHyperImpl(cds);

module.exports = cds.server;
