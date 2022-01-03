import { io } from 'socket.io-client';
import store from '@/store/store';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:3000');
    this.socket.emit('my message', 'Hello there from Vue - START CLIENT');

    this.socket.on('chat-message', (data) => {
      // Слушаю входящие сообщения
      console.log(data);
      store.dispatch('SET_CHAT_DATA', data);
    });
  }

  sendMessage(user, message) {
    // Отправляю сообщения
    // this.socket.emit('my message', text);
      this.socket.emit('chat-message', {
        user,
        message
    });
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }
}

export default new SocketioService();