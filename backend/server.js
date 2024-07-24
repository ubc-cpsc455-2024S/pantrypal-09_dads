const app = require('./app');
const { connectToDb, closeDb } = require('./database');

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectToDb();
        const server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        return server;
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1); // Exit the process with failure
    }
};

const stopServer = async (server) => {
    if (server) {
        await new Promise((resolve, reject) => {
            server.close((err) => {
                if (err) reject(err);
                else resolve();
            });
        });
        await closeDb();
    }
};

if (require.main === module) {
    startServer();
}

module.exports = { startServer, stopServer };
