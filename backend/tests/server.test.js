const request = require('supertest');
const { startServer, stopServer } = require('../server');

let server;

beforeAll(async () => {
    server = await startServer();
});

afterAll(async () => {
    await stopServer()
});

describe('Server', () => {
    test('should return 404 for an unknown route', async () => {
        const response = await request(server).get('/unknown-route');
        expect(response.status).toBe(404);
        expect(response.body.error.message).toBe('Not Found');
    });
});