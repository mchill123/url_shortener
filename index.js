var mongo = require('mongodb')
var shortid = require('shortid');
var validUrl = require('valid-url');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


app.get('/new/:url(*)', function(req, res, next){
    res.send(req.params.url);
});

app.listen(PORT);