require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ===== Models =====
const Job = require('./server/models/Job.js');

// ===== Routes =====
const authRoute = require('./server/routes/authentication');
const userHandler = require('./server/routes/userHandler');

// ===== Mongoose Setup =====
mongoose.Promise = global.Promise;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB = process.env.DB;

mongoose.connect(`mongodb://${USER}:${PASS}@${HOST}:${DB_PORT}/${DB}`, {
  useMongoClient: true,
});

// ===== Server Setup =====
const PORT = process.env.PORT || 3001;

// ===== App Use Routes =====
//app.use(authRoute);
app.use('/api/v1', userHandler);

app.listen(PORT, () => {
  console.log('API listening on port ' + PORT);
});
