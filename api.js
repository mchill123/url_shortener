

module.exports = function(app, db){
    app.get('/new/:url*', handleUrl);
        
    function handleUrl(req, res){
        var nUrl = req.params.url;
        res.send(req.rawHeaders[1]);
    }
} ;