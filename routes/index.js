const app = require('express').Router();

const htmlRouter = require('./html-routes');
const apiRouter = require('./api-routes');


app.use('/', htmlRouter);
app.use('/api', apiRouter);

module.exports = app;