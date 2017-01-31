

module.exports = function(app, db){
    app.get('/new/:url*', handleUrl);
        
    function handleUrl(req, res){
        var nUrl = req.params.url;
        console.log(req);
        res.send(req.rawHeaders[17] +'://'+ req.rawHeaders[1] +'______'+ req.rawHeaders[9]);
        
    }
} ;