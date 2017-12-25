var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: "false"});

module.exports = function(app, dbUrl){
    app.get('/api/*', function(req, res){
        console.log("Check if valid website");
    });
    app.get('/url/*', function(req, res){
        console.log("Check if valid shortened url and redirect");
    })
}