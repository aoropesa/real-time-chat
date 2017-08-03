var io = require('../server.js');
var arr = [];

module.exports = {
  chatMessage: function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    arr.push(msg);
  },
  messageRegistry: arr
};
