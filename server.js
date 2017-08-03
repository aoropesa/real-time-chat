var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('static'));

// app.get('/', function(req, res){
//   res.send('<h1>Hello Word</h1>');
// });

io.on('connection', require('./socket-events/connection.js')); //CommonJS import syntax

http.listen(3004, function(){
  console.log('listening on *: 3004');
});

module.exports = io;
