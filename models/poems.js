// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var poem = {
  selectAll: function(cb) {
    orm.selectAll("haikus", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("haikus", cols, vals, function(res) {
      cb(res);
    });
  },
  findOne: function(objColVals, condition, cb) {
    orm.updateOne("haikus", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller to use
module.exports = poem;
