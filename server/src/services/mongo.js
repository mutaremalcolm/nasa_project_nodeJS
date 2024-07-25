const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://mutarem:1XzQISPnwuT11QPE@nasa.i4gfqsy.mongodb.net/?retryWrites=true&w=majority&appName=nasa&ssl=true';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
};

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}