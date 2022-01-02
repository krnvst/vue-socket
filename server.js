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

  console.log('a user connected  - START SERVER');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('my message', (msg) => {
	console.log('message: ' + msg);
    io.emit('my broadcast', `server: ${msg}`);
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});