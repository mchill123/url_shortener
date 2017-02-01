
var api = require('./api.js');
var mongo = require('mongodb');
var mLab = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url_shortener';
var mongoc = mongo.MongoClient;
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

mongoc.connect(mLab, function(err, db){
    if(err){
        console.log(err);
    }
    else{
        console.log("mongoDB connnected on port "+ mLab);
    }
    
    app.listen(PORT, function(){
        console.log("node connected on port " + PORT);
    });
    
    
    
    api(app,db);
    
});

