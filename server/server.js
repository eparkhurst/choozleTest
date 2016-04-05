// "node server.js" to start it up

var express = require('express');
var app = express();

app.use(express.static('../public'));

var server = app.listen(3000, function ()
{
    console.log('App listening at http://localhost:%s', server.address().port);
});
