const express = require('express');
const app = express();


// Import routes
const blogRoute = require('./routes/posts');


//Router MIddlewares
app.use(express.json());
app.use('/', blogRoute);

module.exports = app;
