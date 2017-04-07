var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
import { createStore, combineReducers } from 'redux'

import reducer from './client/src/reducers/index'
import { addPostIt, addBoard } from './client/src/actions/index'

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let store = createStore(reducer)

/*
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
*/

io.on('connection', function(socket){
  socket.emit('board', store.getState())
  socket.emit('action', addBoard(store.getState()))

  socket.on('postIt', (text) => {
    console.log("postIt received: ", text);
    store.dispatch(addPostIt(text))
    io.emit('postItUpdate', text)
  })

  socket.on('action', (action) => { switch (action.type) {
    case "server/addPostIt":
      console.log("postIt received with Middleware: ", action.data);
      const newAction = addPostIt(action.data)
      store.dispatch(newAction)
      io.emit('action', newAction)
      break
    case "server/deletePostIt":
      console.log("trying to delete postit")
  }})
});

var port = 10000;
http.listen(port, function () {
    console.log('listening on *:' + port);
});
