var express = require("express")
var bodyParser = require("body-parser")
var chalk = require("chalk")
//var mongodb = require("mongodb")
//var ObjectID = mongodb.ObjectID

/*
*setting up the server and database
*/
var app = express()
var router = express.Router()
app.use(bodyParser.json())
app.use('/api', router)


var distDir = __dirname + "/dist/CollegeOfBusiness"
app.use(express.static(distDir))
console.log(__dirname)

var server = app.listen(8080, function () {
    var port = server.address().port
    console.log(chalk.blue( "App now running on port", port))
})


/*
*establing api routes
*/
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason)
    res.status(code || 500).json({"error": message})
}

router.get('/test', function(req,res) {
    res.status(200).json({string: "This is just to demonstrate using the api to retrieve json."})
})