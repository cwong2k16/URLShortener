var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: "false"});

module.exports = function(app, dbUrl){
    app.get('/api/*', function(req, res){
        console.log("Check if valid website");
    });

    // Check if valid shortened url and redirect
    app.get('/url/:num', function(req, res){
        // has to be 4 numbers long
        var num = req.params.num;
        if((num.length == 4) && !isNaN(num) && (num.indexOf('e') == -1)){
            
        }
        else{
            console.log("invalid!");
        }
    });
}