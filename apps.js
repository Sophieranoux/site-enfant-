var express = require("express");
var app = express();

app.use(express.static("static"));

app.get("/team", function(req, res){
    res.sendFile('/static/team.html',{
            root: __dirname ,
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        }
    );
});

app.listen("3129", function(err){
    console.log("Application ready listening on port 3129");
});