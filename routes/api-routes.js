// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");
var syllable = require('syllable');


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the poems
  app.get("/api/poems", function(req, res) {
    db.Haiku.findAll({})
      .then(function(dbPoems) {
        res.json(dbPoems);
      });
  });

  // POST route for creating a poem using the data on req.body
  app.post("/api/poems", function(req, res, err) {
    // validating syllables

    // first line
    if (syllable(req.body.lineA) === 5) {
      var lineA_validated = req.body.lineA
    }

    if (syllable(req.body.lineA) != 5) {
      res.status(500)
      res.render('error', { error: err })
      console.log("Check your validation!");
    }

    // second line
    if (syllable(req.body.lineB) === 7) {
      var lineB_validated = req.body.lineB
    }

    if (syllable(req.body.lineB) != 7) {
      res.status(500)
      res.render('error', { error: err })
      console.log("Check your validation!");
    }

    // third line
    if (syllable(req.body.lineC) === 5) {
      var lineC_validated = req.body.lineC
    }

    if (syllable(req.body.lineC) != 5) {
      res.status(500)
      res.render('error', { error: err })
      console.log("Check your validation!");
    }

    db.Haiku.create({
      haiku_title: req.body.title,
      haiku_lineA: lineA_validated,
      haiku_lineB: lineB_validated,
      haiku_lineC: lineC_validated,
      haiku_author: req.body.author,
      haiku_category: req.body.category
    }).then(function(dbPoems) {
      res.json(dbPoems);
    });
  });

  // GET route for getting poems by category
  app.get("/api/poems/:category", function(req, res) {
    db.Haiku.findAll({
      where: {
        haiku_category: req.params.category
      }
    })
      .then(function(dbPoems) {
        res.json(dbPoems);
      });
  });

};
