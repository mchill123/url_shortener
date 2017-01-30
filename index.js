var api = require('./api');
var mongo = require('mongodb');
var mLab = "mongodb://localhost:27017/url_shortener" || "mongodb://heroku_974x9zkh:6o51gllljf4mjp7idf37je9ol5@ds137759.mlab.com:37759/heroku_974x9zkh";
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
    
    db.createCollection('sites');
    
    api(app,db);
    
    app.listen(PORT, function(){
        console.log("node connected on port " + PORT);
    });
    db.close();
});

