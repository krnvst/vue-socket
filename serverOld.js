//////////////////// 1111111
// const app = require('express')();
// const http = require('http').createServer(app);

// app.get('/', (req, res) => {
//   res.send('<h1>Hey Socket.io</h1>');
// });

// http.listen(3000, () => {
//   console.log('listeninghttp on *:3000');
// });

//////////////////// 222222222
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080']
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('my message', (msg) => {
	console.log('message: ' + msg);
    io.emit('my broadcast', `server: ${msg}`);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

///////////// 333333333333333
// let app = require('express')();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });


// http.listen(3000, () => {
//     console.log('Listening on port *: 3000');
// });

// io.on('connection', (socket) => {

//     socket.emit('connections', Object.keys(io.sockets.connected).length);

//     socket.on('disconnect', () => {
//         console.log("A user disconnected");
//     });

//     socket.on('chat-message', (data) => {
//         socket.broadcast.emit('chat-message', (data));
//     });

//     socket.on('typing', (data) => {
//         socket.broadcast.emit('typing', (data));
//     });

//     socket.on('stopTyping', () => {
//         socket.broadcast.emit('stopTyping');
//     });

//     socket.on('joined', (data) => {
//         socket.broadcast.emit('joined', (data));
//     });

//     socket.on('leave', (data) => {
//         socket.broadcast.emit('leave', (data));
//     });

// });