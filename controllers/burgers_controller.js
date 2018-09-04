var express = require('express');
var router = express.Router();

//importing the model (burger.js) to use the database
var burger = require('../models/burger.js');

//creating our routes
router.get("/", function(req, res) {
    burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});//end of router.get//

router.post("/", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function() {
      res.redirect("/");
    });
  });//end of router.post

  router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect("/");
    });
  });//end of router.put

  router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function() {
      res.redirect("/");
    });
  });//end of router.delete

  // Export routes for server.js to use.
    module.exports = router;
  
