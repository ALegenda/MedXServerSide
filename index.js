var express = require('express');
var app = express();
var mongodb = require("mongodb");
var db;
var ObjectID = require('mongodb').ObjectID;
var url = "mongodb://heroku_spf2nvhx:c3pgsoa5k960kebae90fna50ft@ds133231.mlab.com:33231/heroku_spf2nvhx";

mongodb.MongoClient.connect(process.env.MONGODB_URI||url, function (err, database)
{
    if (err)
    {
        console.log(err);
        process.exit(1);
    }

    db = database;

});

app.set('port', (process.env.PORT || 5000));


app.get('/', function(request, response) {
  response.send('All right');
});

app.get('/vidal/:id', function(request, response) {
    var collection = db.collection('NewVidal');
    var id = Number(request.params.id);
    collection.find({DrugId: id}).toArray(function(err, docs) {
        console.log(request.params["id"]);
        console.dir(docs);
        response.send(docs);
    });
});

app.get('/lsg/:id', function(request, response) {
    var collection = db.collection('NewLsg');
    var id = Number(request.params.id);
    collection.find({DrugId: id}).toArray(function(err, docs) {
        console.log(request.params["id"]);
        console.dir(docs);
        response.send(docs);
    });
});

app.get('/allmeds', function(request, response) {
    var collection = db.collection('NewMeds');
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.dir(docs);
        response.send(docs);
    });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


