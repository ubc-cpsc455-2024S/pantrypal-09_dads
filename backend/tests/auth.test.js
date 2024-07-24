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

describe('Auth Routes', () => {
    test('should sign up a new user', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                passwordHash: 'hashedpassword'
            });
        expect(response.status).toBe(201);
        expect(response.text).toBe('User created successfully');
    });

    test('should not sign up an existing user', async () => {
        await request(app)
            .post('/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                passwordHash: 'hashedpassword'
            });

        const response = await request(app)
            .post('/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                passwordHash: 'hashedpassword'
            });
        expect(response.status).toBe(409);
        expect(response.text).toBe('Username already exists');
    });

    test('should not sign up a user with missing fields', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
            });
        expect(response.status).toBe(400);
        expect(response.text).toBe('Missing required fields');
    });

    test('should login valid existing user', async () => {
        await request(app)
            .post('/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                passwordHash: 'hashedpassword'
            });

        const response = await request(app)
            .post('/auth/login')
            .send({
                username: 'testuser',
                passwordHash: 'hashedpassword'
            });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Login successful');
    });

    test('should not login invalid user', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({
                username: 'testuser',
                passwordHash: 'wrongpassword'
            });
        expect(response.status).toBe(404);
        expect(response.text).toBe('User not found or incorrect password');
    });
});
