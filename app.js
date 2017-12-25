var express = require('express');
var mongoose = require('mongoose');
var controller = require('./controllers/controller');

var app = express();
mongoose.connect('mongodb://chris:password@ds163796.mlab.com:63796/urls');

var schema = new mongoose.Schema({
    Number: String
});

var dbUrl = mongoose.model('urls', schema);

controller(app, dbUrl);

app.listen(8080);