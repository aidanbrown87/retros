var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    //io.emit('chat message', msg);
    setInterval( function() {
      io.emit('chat message', "Hello")
    },1000)
  });
});

var port = 10000;
http.listen(port, function () {
    console.log('listening on *:' + port);
});
