const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/jest.fileMock.js",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jest-environment-jsdom",
  transform: { "^.+\\.(ts?|tsx?)$": "babel-jest" },
  transformIgnorePatterns: [`/node_modules/(?!${["uuid"].join("|")})`],
  testPathIgnorePatterns: ["<rootDir>/e2e/"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  roots: ["<rootDir>/src"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__reports__",
        filename: "jest.html",
      },
    ],
  ],
};
