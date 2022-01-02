import { io } from 'socket.io-client';
import store from '@/store/store';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:3000');
    this.socket.emit('my message', 'Hello there from Vue - START CLIENT');

    this.socket.on('my broadcast', (data) => {
      console.log(data);
      store.dispatch('SET_MESSAGE', data);
    });
  }

  sendMessage(text) {
    this.socket.emit('my message', text);
  }

  disconnect() {
      if (this.socket) {
          this.socket.disconnect();
      }
  }
}

export default new SocketioService();