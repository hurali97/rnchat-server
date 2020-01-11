const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", data => {
      console.log(data);
    //   io.emit("chat message", msg);
    io.sockets.in(data.room).emit('chat message', data.msg);
    });

    socket.on('room', function(data) {
        console.log('me');
        socket.join(data.room);
      });

    
  });

 

  server.listen(port, () => console.log("server running on port:" + port));