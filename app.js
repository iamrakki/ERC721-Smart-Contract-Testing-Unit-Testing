require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routers');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
app.listen(3000, function () {
    console.log("App started at port 3000!!");
});