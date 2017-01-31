

module.exports = function(app, db){
    app.get('/new/:url*', handleUrl);
        
    function shortenSave(nurl){
        var sUrl = 1000+Math.floor(Math.random()*9999);
        var sObj = { sUrl: nurl };
        var sites = db.collection('sites');
        sites.insertOne(sObj, function(err, call){
            if (err) throw err;
        });
        return sUrl;
        
    }
    
    function handleUrl(req, res){
        var nUrl =req.url.slice(5);
        var oUrl = req.protocol+"://"+req.get('host')+req.url;
        var sUrl = req.protocol+"://"+req.get('host')+shortenSave(nUrl);
        var dObj = {
            'Original URL': oUrl,
            'Shortened URL': sUrl
        };
        res.send(dObj);
        
        
        
        
    }
} ;