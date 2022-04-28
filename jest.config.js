
/**
 * @type {import("@jest/types").Config.ProjectConfig}
 */
module.exports = {
  testTimeout: 10 * 1000,
  transform: {
    ".(js|ts|tsx)": "ts-jest"
  },
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/node_modules/**"
  ],
  coveragePathIgnorePatterns: [
    "src/grammar/vendor",
    "node_modules/",
    "src/grammar/HandlerName*.js",
  ],
  testEnvironment: "node",
  testRegex: "/test/.*\\.test\\.ts$",
  moduleFileExtensions: [
    "ts",
    "js",
    "json"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};
