var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: "false"});

module.exports = function(app, dbUrl){
    app.get('/api/:num', function(req, res){
        console.log("Check if valid website");
    });

    // Check if valid shortened url and redirect
    app.get('/url/:num', function(req, res){
        // has to be 4 numbers long
        var num = req.params.num;
        var itemOne = dbUrl({url:"https://google.com", num: 4444}).save(function(err){
            if(err){
                throw err;
            }
            console.log("saved");
        });
        if((num.length == 4) && !isNaN(num) && (num.indexOf('e') == -1)){
            dbUrl.find({url:"https://google.com"}, function(err, data){
                if(err){
                    throw err;
                }
                console.log("asdasds" + data);
                // var url = data[num];
                // if(!url){
                //     console.log("Invalid short url!");
                // }
                // else{
                //     res.redirect(url);
                // }
            });
        }
        else{
            console.log("Invalid short url!");
        }
    });
}