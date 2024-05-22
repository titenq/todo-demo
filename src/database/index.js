require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.CONNECTION_STRING;

mongoose.set('strictQuery', true);

mongoose.connect(connectionString);

mongoose.Promise = global.Promise;

module.exports = mongoose;
