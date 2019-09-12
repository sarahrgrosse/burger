//Bringing in express router
var router = require("express").Router()

//Bring in our controllers
var burgerController = require("../controllers/burgers_controller")

//Define routes
router.get("/burgers", burgerController.findAll)

//Export routes
module.exports = router