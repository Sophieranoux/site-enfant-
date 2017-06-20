var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://essec:cergyisc00l@138.68.110.210:27017/admin?readPreference=primary';

MongoClient.connect(url, function(err, db) {

    var collection = db.collection("contactsiteenfant");

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static("static"));

    app.post("/action", function(req,res){
        collection.insert(req.body);
        res.redirect("/team");
    });

    app.get("/list",function(req, res){
        collection.find().toArray(function(err,results){
            res.send(results);
        });
    });

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
});