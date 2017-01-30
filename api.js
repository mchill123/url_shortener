

module.exports = function(app, db){
    app.get('/new/:url', function(req, res){
        res.send('url' + req.params.url);
    });
} ;