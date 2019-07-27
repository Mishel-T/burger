//Require express
var express = require("express");

var router = express.Router();


// Import burger model (burger.js) in order to use db functions defined in orm calls 
var model = require("../controllers/burger.js");

// Create all routes and set up logic within those routes where required.(api routes)

// Creating Route for index page (html routes)
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/index.handlebars"));
  });

// Export routes for server.js to use.
module.exports = router;
