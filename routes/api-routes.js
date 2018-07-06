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
module.exports = function (app) {

  // GET route for getting all of the poems
  app.get("/api/poems", function (req, res) {
    db.Haiku.findAll({})
      .then(function (dbPoems) {
        res.json(dbPoems);
      });
  });

  // POST route for creating a poem using the data on req.body
  app.post("/api/poems", function (req, res, err) {

    // validating syllables

    var syllableSum = (syllable(req.body.lineA) + syllable(req.body.lineB) + syllable(req.body.lineC))
    console.log(syllableSum);

    // if syllable total is not equal to 17, return an error
    if (syllableSum != 17) {
      return res.status(500).end();

      console.log("Check your validation!");

    }

    // else, if syllable total is exactly 17, create a new poem in the mysql
    else {

      db.Haiku.create({
        haiku_title: req.body.title,
        haiku_lineA: req.body.lineA,
        haiku_lineB: req.body.lineB,
        haiku_lineC: req.body.lineC,
        haiku_author: req.body.author,
        haiku_category: req.body.category
      }).then(function (dbPoems) {
        res.json(dbPoems);
      });
    }
  });

  // GET route for getting poems by category
  app.get("/api/poems/category/:category", function (req, res) {
    db.Haiku.findAll({
      where: {
        haiku_category: req.params.category
      }
    })
      .then(function (dbPoems) {
        res.json(dbPoems);
      });
  });

  // GET route for getting poems by author
  app.get("/api/poems/author/:author", function (req, res) {
    db.Haiku.findAll({
      where: {
        haiku_author: req.params.author
      }
    })
      .then(function (dbPoems) {
        res.json(dbPoems);
      });
  });

  app.get("/api/authors", function (req, res) {
    db.Haiku.findAll({
      attributes: ['haiku_author']
    })
    .then(function (dbPoems) {
      res.json(dbPoems);
    });
  });

};
