const mongoose = require('mongoose');

const connectionString = process.env.DB_URL;

//mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
//  console.error('Connection error', e.message);
//});

mongoose.connect('mongodb://db/moviedb', { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;