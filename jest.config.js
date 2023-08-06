module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    preset: "jest-expo",
    setupFilesAfterEnv: ["./jest.setup.js"],
    transform: {
        "^.+\\.js$": "babel-jest"
    }
};