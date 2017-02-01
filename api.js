'use strict';
var path = require('path');

module.exports = function(app, db){
    app.all('/', function(req,res){
    var filename = path.join(__dirname, 'index.html');
    res.sendFile(filename);
});
    app.all('/new/:url*', handleUrl);
    app.all('/sm/', searchReturn);
   
        
   
    function handleUrl(req, res){
        console.log('handled');
        var nUrl =req.url.slice(5);
        var oUrl = req.protocol+"://"+req.get('host')+req.url;
        var sUrl = req.protocol+"://"+req.get('host')+'/sm/'+shortenSave(nUrl);
        var dObj = {
            'Original URL': oUrl,
            'Shortened URL': sUrl
        };
        res.send(dObj);
    }
        
  
  
    function shortenSave(nurl){
        var sUrl = (1000+Math.floor(Math.random()*8999)).toString();
        var sObj = { short: sUrl,
            original : nurl
        };
        save(sObj, db);
        console.log(sObj);
        return sUrl;
         }
         
         
         
    function save(sObj, db){
        var sites = db.collection('sites');
        sites.save(sObj, function(err,result){
            if (err) throw err;
            console.log('saved'+ result);
        });
         }
         
    function searchReturn(req, res){
        
        var sl = (req.url).slice(4);
        var search = { 'short': sl};
        var sites = db.collection('sites');
        sites.find(search).toArray(function(err, data){
            if (err) throw err;
            var orig = data.original;
            console.log(sl);
            res.redirect(orig);
            
        });
        
    }
    };