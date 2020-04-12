module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  runner: 'jest-serial-runner',
  setupFilesAfterEnv: ['./jest.setup.js', 'jest-extended'],
};
