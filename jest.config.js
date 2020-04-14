module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};