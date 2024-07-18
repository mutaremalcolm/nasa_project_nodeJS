const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://mutarem:1XzQISPnwuT11QPE@cluster0.i4gfqsy.mongodb.net/?retryWrites=true&w=majority&appName=nasa';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();
