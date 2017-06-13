var express = require("express");
var app = express();

app.use(express.static("static"));

app.listen("3129", function(err){
    console.log("Application ready listening on port 3129");
});