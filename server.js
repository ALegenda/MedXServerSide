var express         = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('API is running');
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});