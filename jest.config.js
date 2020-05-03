module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  testMatch: ["**/*.test.tsx"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
};
