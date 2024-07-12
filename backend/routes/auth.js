const express = require('express');
const router = express.Router();
const { getDb } = require('../database.js');

// Used to insert a new user into the database
// Expects a username, email, passwordHash
router.post('/auth/creator', async (req, res) => {
    const db = getDb();
    const { username, email, passwordHash } = req.body;
    if (!username || !email || !passwordHash) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const existingUser = await db.collection('users').findOne({ username });
        if (existingUser) {
            return res.status(409).send('Username already exists');
        }

        const newUser = {
            username,
            email,
            passwordHash,
            ingredients: new Map(),
            recipes: [],
            favorites: []
        };

        await db.collection('users').insertOne(newUser);
        res.status(201).send('User created successfully');

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
});

// Expects Username and passwordHash
// Checks if Username and passwordHash exist
router.get('/auth/handler', async (req, res) => {
    const db = getDb();
    const { username, passwordHash } = req.query;
    if (!username || !passwordHash) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const userRow = await db.collection('users').findOne({ username, passwordHash });
        if (!userRow) {
            return res.status(404).send('User not found or incorrect password');
        }

        res.status(200).json({ userRow });

    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Error fetching user');
    }
});

module.exports = router;