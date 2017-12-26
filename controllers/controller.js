var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: "false"});
var validUrl = require('valid-url');

module.exports = function(app, dbUrl){
    app.get('/api/:url*', function(req, res){
        var url = req.url;
        url = url.slice(5);
        if(validUrl.isWebUri(url)){
            console.log("looks good");
        }
        else{
            console.log("doesn't look good");
        }
    });

    // Check if valid shortened url and redirect (valid means 4 chars long and 0-9 numbers only)
    app.get('/url/:nums', function(req, res){
        var nums = req.params.nums;
        if((nums.length == 4) && !isNaN(nums) && (nums.indexOf('e') == -1)){
            dbUrl.find({num:nums}, function(err, data){
                if(err){
                    throw err;
                }
                if(data.length > 0){
                    res.redirect(data[0]["url"]);
                }
                else{
                    console.log("Does not exist in database!");
                }
            });
        }
        else{
            console.log("Invalid short url!");
        }
    });
}