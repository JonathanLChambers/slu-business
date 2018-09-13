var express = require("express")
var bodyParser = require("body-parser")
var chalk = require("chalk")
var mongodb = require("mongodb")
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

var db
var testCollection = "tests"

// Connect to the database before starting the application server.
mongodb.MongoClient.connect("mongodb://411admin:411password@ds149672.mlab.com:49672/411db", function (err, client) {
    if (err) {
        console.log(err)
        process.exit(1)
    }

    // Save database object from the callback for reuse.
    db = client.db("411db")
    console.log(chalk.green("Database connection ready"))


    var server = app.listen(8080, function () {
        var port = server.address().port
        console.log(chalk.blue( "App now running on port", port))
    })
})

/*
*establing api routes
*/
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason)
    res.status(code || 500).json({"error": message})
}

router.get('/test', function(req,res) {
    db.collection(testCollection).find({}).toArray(function(err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get tests.")
        } else {
          res.status(200).json(docs)
        }
      })
})
router.post('/test', function(req,res) {
    var newTest = req.body
    db.collection(testCollection).insertOne(newTest, function(err, doc){
        if (err){
            console.log(err)
        } else{
            res.status(201).json(doc.ops[0])
        }
    })
})