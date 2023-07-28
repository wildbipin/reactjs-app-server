const mongoose = require('mongoose');

//const connectionString = process.env.DB_URL;

//const connectionString = mongodb://<username>:<password>@<pod-0-name>.<headless-service-name>.<namespace>.svc.cluster.local:27017,<pod-1-name>.<headless-service-name>.<namespace>.svc.cluster.local:27017/<database-name>?replicaSet=rs0;


const connectionString = mongodb://adminuser:password123@mongodb-0.mongodb-service.default.svc.cluster.local:27017,mongodb-1.mongodb-service.default.svc.cluster.local:27017/moviedb?replicaSet=mongo-rs;

mongoose.connect(connectionString, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,}).catch((e) => {
  console.error('Connection error', e.message);
});

//mongoose.connect('mongodb://data/db', { useNewUrlParser: true }).catch((e) => {
//  console.error('Connection error', e.message);
//});

const db = mongoose.connection;

module.exports = db;
