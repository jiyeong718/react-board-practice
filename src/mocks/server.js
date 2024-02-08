import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { rest } from 'msw';

// Setup requests interception using the given handlers.
const server = setupServer(...handlers);

export { server };