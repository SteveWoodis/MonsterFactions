//const config = require('../../config.json');
const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', (callback) => {
    console.log('db connected');
});

const customerSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    streetAddress: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    postalCode: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    userName: {type: String, required: true},
    faction: {type: String, required: true}
});
module.exports = mongoose.model('Customer', customerSchema);

