var express = require("express");
var app = express();
var http = require("http");
var io = require("socket.io");

app.get("/", function(req, res) {
  res.send("yes. det virker. fedt");
});

app.listen(3000, function() {
  console.log("Jeg lytter..");
});
