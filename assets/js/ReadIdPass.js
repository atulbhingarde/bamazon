
const myEnv = require('dotenv').config();

exports.MySqlDb = {
  id: process.env.MySqlDbId,
  secret: process.env.MySqlDbSecret
};
