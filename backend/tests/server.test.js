const request = require('supertest');
const app = require('../server');
const { connectToDb, closeDb } = require('../utils/database');

beforeAll(async () => {
    await connectToDb();
});

afterAll(async () => {
    await closeDb();
});

describe('Server', () => {
    test('should return 404 for an unknown route', async () => {
        const response = await request(app).get('/unknown-route');
        expect(response.status).toBe(404);
    });
});