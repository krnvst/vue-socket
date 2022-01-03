const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080']
  }
});
const port = "3000"

// app.get('/', (req, res) => {
//   res.send('<h1>Hey Socket.io</h1>');
// });

io.on('connection', (socket) => {
  console.log('NEW CONNECTION IN SOCKET SERVER');

  socket.emit('connections', io.sockets.server.engine.clientsCount);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat-message', (data) => {
    console.log(data);
    io.emit('chat-message', data); // Отправить всем в том числе отправляющему
    // socket.broadcast.emit('chat-message', (data)); //  Отправить всем кроме отправляющего
  });

});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});