var express = require("express");
var app = express();

//require our other express apps for mounting
var auth = require("./AuthApp/auth");
var other = require("./other");
//mount apps
app.use('/auth', auth);
app.use('/other', other);



app.get('/', function (req, res) {
  res.send("This is the '/' route in main_app");
});

app.listen(3000);
