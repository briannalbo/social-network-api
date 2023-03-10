//imports mongoose 
const { connect, connection } = require('mongoose');

//establishes mongoDB connection
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//exports connection to be used through app
module.exports = connection;