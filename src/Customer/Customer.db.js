//var config = require('../../config.json');
var mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
    console.log('db connected');
});

var customerSchema = mongoose.Schema({
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

