/** @type { import('jest').Config } */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    clearMocks: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/'],
    moduleNameMapper: {
        '\\.(css|sass|scss)$': '<rootDir>/.jest/styleMock.js',
    },
};
