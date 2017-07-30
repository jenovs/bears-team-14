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
const USER = process.env.USER;
const PASS = process.env.PASS;
const HOST = process.env.HOST;
const DB_PORT = process.env.DB_PORT;
const DB = process.env.DB;
// Temporary fix for accessing mlab
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

// ===== Server Setup =====
const PORT = process.env.PORT || 3001;

// ===== App Use Routes =====
//app.use(authRoute);
app.use('/api/v1', userHandler);

app.listen(PORT, () => {
  console.log('API listening on port ' + PORT);
});
