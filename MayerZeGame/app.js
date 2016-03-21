var express = require("express");
var app = express();
var http = require("http");
var io = require("socket.io");

var io = new io();

var server = http.createServer(app);
io.listen(server);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

var game = {
  players: []
};

io.on("connection", function(socket) {
  console.log("a user connected!");
  game.players.push(socket);
  console.log("player array size:", game.players.length);
  console.log(game);
  socket.on("disconnect", function() {
    console.log("mofo disconnected");
    var index = game.players.indexOf(socket);
    game.players.splice(index, 1);
    console.log("player array size:", game.players.length);
  });
});

server.listen(3000, function() {
  console.log("Jeg lytter..");
});
