var express = require("express")
var bodyParser = require("body-parser")
var chalk = require("chalk")
//var mongodb = require("mongodb")
//var ObjectID = mongodb.ObjectID

/*
*setting up the server and database
*/
var app = express()
app.use(bodyParser.json())

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var server = app.listen(8080, function () {
    var port = server.address().port
    console.log(chalk.blue( "App now running on port", port))
})


/*
*establing api routes
*/
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

