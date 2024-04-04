/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require("dotenv");
dotenv.config({
  path: ".env.test",
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    // '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testTimeout: 40000,
  testPathIgnorePatterns: ["/dummy/", "^.+\\.(js|jsx)$"],
  coveragePathIgnorePatterns: ["/src/config"],
  globalSetup: "./jest.setup.ts",
  globalTeardown: "./jest.tearDown.ts",
};
