import { server } from '@/mock/server';
import {
  VueRouterMock,
  createRouterMock,
  injectRouterMock,
} from 'vue-router-mock';
import { config } from '@vue/test-utils';
import { cleanup } from './utils';

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

const router = createRouterMock();
beforeEach(() => {
  injectRouterMock(router);
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
  cleanup();
});
// Clean up after the tests are finished.
afterAll(() => {
  server.close();
});
config.plugins.VueWrapper.install(VueRouterMock);
