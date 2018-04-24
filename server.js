const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://admin:admin@ds155315.mlab.com:55315/character');

app
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(session({
    secret: 'Thisismytestkey',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
  }))
  .get('/api', (req, res) => {
    res.send('ddd')
  })
  .listen(3001, () => {
    console.log('Listening on port 3001');
  });