const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ===== Models =====
const Job = require('server/models/Job.js');

// ===== Routes =====
const authRoute = require('./server/routes/authentication');
const userHandler = require('./server/routes/userHandler');

// ===== Mongoose Setup =====

// ===== Server Setup =====
const PORT = process.env.PORT || 3001;

// ===== App Use Routes =====
//app.use(authRoute);
app.use('/api/v1', userHandler);

app.listen(PORT, () => {
  console.log('API listening on port ' + PORT);
});
