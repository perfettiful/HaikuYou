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
    db.Post.findAll({})
      .then(function(dbPoems) {
        res.json(dbPoems);
      });
  });

  // POST route for creating a poem using the data on req.body
  app.post("/api/poems", function(req, res) {
    db.Todo.create({
      haiku_title: req.body.title,
      haiku_text: req.body.text,
      haiku_author: req.body.author,
      haiku_category: req.body.category
    }).then(function(dbPoems) {
      res.json(dbPoems);
    });
  });

  // GET route for getting poems by category
  app.get("/api/poems/:category", function(req, res) {
    db.Poem.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPoems) {
        res.json(dbPoems);
      });
  });

};
