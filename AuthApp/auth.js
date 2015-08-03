var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send("This is the '/' route in auth.js file");
});

module.exports = app;
