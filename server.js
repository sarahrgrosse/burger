//Bring in dependencies 
var express = require("express")
var db = require("./models")

//Creating express application 
var app = express()

//Allow express to serve static content 
//This is pulling our frontend into our server
app.use(express.static("public"))

//Add middleware for parsing requests 
app.use(express.urlencoded({ extended: true })) //req.params 
app.use(express.json()) //req.body

//Bring in api routes
var apiRoutes = require("./routes/api")

app.use("/api", apiRoutes)

//Bring in HTML routes
var htmlRoutes = require("./routes/html")

//app.use("/", htmlRoutes)

//Define our port
var PORT = 8080

//Connect to database and start the server
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("app now listening on port: ", PORT)
    })
})