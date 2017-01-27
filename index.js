var mongo = require('mongodb').MongoClient;
var shortid = require('shortid');
var validUrl = require('valid-url');
var express = require('express');
var app = express.Router();
var PORT = process.env.PORT || 3000;


app.get('/new/:url(*)', function(req,res, next){
    res.send('Hello World');
});

app.listen(PORT);