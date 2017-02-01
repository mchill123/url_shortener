

module.exports = function(app, db){
    app.get('/new/:url*', handleUrl);
    app.get('/*', searchReturn);
        
   
    function handleUrl(req, res){
        var nUrl =req.url.slice(5);
        var oUrl = req.protocol+"://"+req.get('host')+req.url;
        var sUrl = req.protocol+"://"+req.get('host')+'/'+shortenSave(nUrl);
        var dObj = {
            'Original URL': oUrl,
            'Shortened URL': sUrl
        }
        res.send(dObj);
    }
        
  
  
    function shortenSave(nurl){
        var sUrl = (1000+Math.floor(Math.random()*8999)).toString();
        var sObj = {};
        sObj[sUrl]=nurl;
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
        var search = {};
        var sl = (req.url).slice(1);
        search[sl]= {$exists: true};
        var sites = db.collection('sites');
        sites.findOne(search, function(err, data){
            if (err) throw err;
            res.redirect(data[sl]);
        });
        
    }
    };