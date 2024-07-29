const request = require('supertest');
const app = require('../server');
const { connectToDb, closeDb, getDb } = require('../utils/database');

beforeAll(async () => {
    await connectToDb();
});

afterAll(async () => {
    await closeDb();
});

let token;

beforeEach(async () => {
    const db = getDb();
    await db.collection('users').deleteMany({ email: 'testuser@example.com' });

    // Create a test user and get a token
    await request(app)
        .post('/api/auth/signup')
        .send({
            email: 'testuser@example.com',
            password: 'password'
        });

    const response = await request(app)
        .post('/api/auth/login')
        .send({
            email: 'testuser@example.com',
            password: 'password'
        });

    token = response.body.token;
});

describe('Preferences Routes', () => {
    test('should set user preferences', async () => {
        const preferences = 'Vegan';

        const response = await request(app)
            .post('/api/preferences/set')
            .set('Authorization', `Bearer ${token}`)
            .send({ preferences });

        expect(response.status).toBe(200);
        expect(response.body.preferences).toBe(preferences);
    });

    test('should get user preferences', async () => {
        const preferences = 'Vegan';

        await request(app)
            .post('/api/preferences/set')
            .set('Authorization', `Bearer ${token}`)
            .send({ preferences });

        const response = await request(app)
            .get('/api/preferences')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.preferences).toBe(preferences);
    });

    test('should not get preferences for a non-existent user', async () => {
        const response = await request(app)
            .get('/api/preferences')
            .set('Authorization', `Bearer invalid_token`);
        expect(response.status).toBe(401); // Unauthorized due to invalid token
    });

    test('should not get preferences without being authenticated', async () => {
        const response = await request(app)
            .get('/api/preferences');
        expect(response.status).toBe(401); // Unauthorized
    });

    test('should not set preferences without being authenticated', async () => {
        const preferences = 'Vegan';

        const response = await request(app)
            .post('/api/preferences/set')
            .send({ preferences });

        expect(response.status).toBe(401); // Unauthorized
    });
});