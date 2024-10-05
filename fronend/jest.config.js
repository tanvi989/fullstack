module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/e2e/'],
    transform: {
      '^.+\\.(ts|js|html)$': [
        'ts-jest',
        {
          tsconfig: '<rootDir>/tsconfig.spec.json',
          stringifyContentPathRegex: '\\.html$'
        }
      ]
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  };
  