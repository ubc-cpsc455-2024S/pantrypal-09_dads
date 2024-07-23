const request = require('supertest');
const app = require('../server');

describe('Server', () => {
    test('should return 404 for an unknown route', async () => {
        const response = await request(app).get('/unknown-route');
        expect(response.status).toBe(404);
        expect(response.body.error.message).toBe('Not Found');
    });
});