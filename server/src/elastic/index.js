require('dotenv').config();

const { Client } = require('@elastic/elasticsearch');
const client = new Client({
  cloud: {
    id: process.env.cloudId,
  },
  auth: {
    username: process.env.user,
    password: process.env.password,
  },
});

module.exports = client;
