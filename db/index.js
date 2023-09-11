const mongoose = require('mongoose');

//const mongoUri = 'mongodb://reactjsstaticwebapp-server:cXNOMD6RkXMaPeSX4nXt7JR6aZVUqObw1gfBo8UOsOGMXfkY0glhelfqxxWkd8jJZ1sGlEjbZYAMACDbO5HUkQ==@reactjsstaticwebapp-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@reactjsstaticwebapp-server@';


//const mongoUri = 'mongodb://reactjsstaticwebapp-server:cXNOMD6RkXMaPeSX4nXt7JR6aZVUqObw1gfBo8UOsOGMXfkY0glhelfqxxWkd8jJZ1sGlEjbZYAMACDbO5HUkQ==@reactjsstaticwebapp-server.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@reactjsstaticwebapp-server@';
const mongoUri = 'mongodb://reactjsstaticwebapp-server:cXNOMD6RkXMaPeSX4nXt7JR6aZVUqObw1gfBo8UOsOGMXfkY0glhelfqxxWkd8jJZ1sGlEjbZYAMACDbO5HUkQ==@reactjsstaticwebapp-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb';

mongoose.connect(mongoUri, { 
  useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
