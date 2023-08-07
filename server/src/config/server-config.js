const morgan = require('morgan');
const cors = require('cors');
const { json, urlencoded } = require('express');

const corsConfig = {
  origin: ' http://localhost:5173',
  exposedHeaders: ['x-total-count'],
};

const serverConfif = (app) => {
  app.use(cors(corsConfig));
  app.use(morgan('dev'));
  app.use(json());

  app.use(urlencoded({ extended: true }));
};

module.exports = serverConfif;
