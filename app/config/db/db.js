if (!process.env.DATABASE_URL) {
  require('dotenv').config();
}

const pgp = require('pg-promise')();

const databaseURL = process.env.DATABASE_URL;

const db = pgp(databaseURL);

module.exports = db;
