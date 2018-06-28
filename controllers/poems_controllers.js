var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var poem = require("../models/poems.js");

// Route to get all poems
router.get("/", function(req, res) {
  poem.selectAll(function(data) {
    var hbsObject = {
      poems: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Route to add a poem
router.post("/api/poems", function(req, res) {
  burger.insertOne([
    "poem_type", "poem_title", "poem_text", "poem_author"
  ], [
    req.body.poem_type, req.body.poem_title, req.body.poem_text, req.body.poem_author
  ], function(data) {
    res.redirect('/');
  });
});

// Route to get a poem by category
router.get("/api/poems/:category", function(req, res) {
  poem.findOne(function(data) {
    // var hbsObject = {
    //   poems: data
    // };
    // console.log(hbsObject);
    // res.render("index", hbsObject);
  });
});

// Export routes for server.js to use
module.exports = router;
