/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  rootDir: 'src',
  testResultsProcessor: 'jest-sonar-reporter',
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
