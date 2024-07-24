const request = require('supertest');
const app = require('../server');
const { connectToDb, closeDb, getDb } = require('../database');

beforeAll(async () => {
    await connectToDb();
});

afterAll(async () => {
    await closeDb();
});

afterEach(async () => {
    const db = getDb();
    await db.collection('users').deleteMany({ username: 'testuser' });
});

describe('Ingredients Routes', () => {
    test('should add ingredients to a user', async () => {
        await request(app)
            .post('/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                passwordHash: 'hashedpassword'
            });

        const response = await request(app)
            .post('/ingredients/update')
            .send({
                username: 'testuser',
                ingredients: { 'tomato': 2, 'cheese': 1 }
            });
        expect(JSON.parse(response.text)).toEqual({ ingredients: { 'tomato': 2, 'cheese': 1 } });
    });

    test('should fetch ingredients for a user', async () => {
        await request(app)
            .post('/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                passwordHash: 'hashedpassword'
            });

        await request(app)
            .post('/ingredients/update')
            .send({
                username: 'testuser',
                ingredients: { 'cheese': 1, 'tomato': 2 }
            });

        const response = await request(app)
            .get('/ingredients')
            .query({ username: 'testuser' });
        expect(response.body).toEqual({ 'cheese': 1, 'tomato': 2 });
    });

    test('should not fetch ingredients for a non-existent user', async () => {
        const response = await request(app)
            .get('/ingredients')
            .query({ username: 'nonexistentuser' });
        expect(response.text).toBe('No ingredients found for this user');
    });

    test('should not fetch ingredients without username', async () => {
        const response = await request(app)
            .get('/ingredients');
        expect(response.status).toBe(400);
        expect(response.text).toBe('username is required');
    });
});
