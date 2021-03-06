const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
require('./passport-setup');
const { cloudinary } = require('./utils/cloudinary');
require('dotenv').config();

const app = express();
app.use(cors());
const { Shows } = require('./api/shows');
const { Messages } = require('./api/messages');
const { Pictures } = require('./api/pictures');
const { Oauth } = require('./api/oauth');
const { Profile } = require('./api/profile');
const { Twilio } = require('./api/twilio');
const { Weather } = require('./api/weather')
const { Hotels } = require('./api/hotels');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieSession({
  name: 'radma',
  keys: [process.env.COOKIE_KEYS],
}));
app.use(passport.initialize());
app.use('/api/shows', Shows);
app.use('/api/messages', Messages);
app.use('/api/pictures', Pictures);
app.use('/api/oauth', Oauth);
app.use('/api/profile', Profile);
app.use('/api/twilio', Twilio);
app.use('/api/weather', Weather);
app.use('/api/hotels', Hotels);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(passport.session());

module.exports = {
  app,
};
