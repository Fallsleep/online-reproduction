import { setupServer, type SetupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.

// @ts-ignore
export const server: SetupServer = setupServer(...handlers)