/*
   Jest configuration
 */
module.exports = {
  coverageDirectory: "coverage",
  globals: {},
  roots: ["<rootDir>/src", "<rootDir>/test"],
  testMatch: [
    "**/*.[jt]s",
    "!**/src/*.[jt]s",
 ],
  testEnvironment: "node",
  resetMocks: true,
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
  },
  verbose: undefined,
};
