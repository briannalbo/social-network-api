//imports express
const express = require('express');

//imports the mongoDB connections establied in this file below
const db = require('./config/connection');

//imports the routes directory with all routing info
const routes = require('./routes');

//defines port
const PORT = process.env.PORT || 3003;
//sets app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//calls connection to db and port when app is invoked in terminal
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`listening at ${PORT}!`);
  });
});