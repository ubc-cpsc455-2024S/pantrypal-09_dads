const { MongoClient } = require('mongodb');
require('dotenv').config()

const uri = process.env.MONGO_URI

const client = new MongoClient(uri, { monitorCommands: true });

let db;
const DB_NAME = "pantrypal"

async function connectToDb() {
    try {
        await client.connect();
        db = client.db(DB_NAME); 
        console.log('Connected to MongoDB');
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

function getDb() {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
}

module.exports = { connectToDb, getDb };