// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {
  // add api routes
  console.log(app, db);
};
