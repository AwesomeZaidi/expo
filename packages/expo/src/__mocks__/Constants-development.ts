/**
 * A mock of the Constants module with extra fields specified to simulate a project in development.
 * Use it by importing and returning it from a `jest.mock` call explicitly.
 */

const Constants = (require as any).requireActual('expo-constants').default;

const MockConstants = Object.create(Constants);
MockConstants.manifest = {
  ...Constants.manifest,
  developer: {
    projectRoot: '/home/test/project',
  },
  logUrl: 'https://localhost:19001/logs',
};

// @ts-ignore: change this to use "export" instead if possible
module.exports = MockConstants;
