// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

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
  app.post("/api/poems", function(req, res) {
    console.log(req.body);
    db.Haiku.create({
      haiku_title: req.body.title,
      haiku_lineA: req.body.lineA,
      haiku_lineB: req.body.lineB,
      haiku_lineC: req.body.lineC,
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
        category: req.params.category
      }
    })
      .then(function(dbPoems) {
        res.json(dbPoems);
      });
  });

};
