var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var routes = './server/routes/route.js';

app.use(routes);
var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log("App listening at http://localhost:" + PORT);
});