module.exports = {
  "rootDir": "../",
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/config/setupTests.js"
  ],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./coverage/html-report",
        filename: "report.html",
      },
    ],
  ],
  collectCoverageFrom: [
    '!*.d.ts',
    "src/**/*.{js,ts,jsx,tsx}",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
  ],
  coverageReporters: ["text"],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
