<template>
  <chat-send-message />
  <chat-list-message />
</template>

<script>
import SocketioService from '@/services/socketio.service.js';

// components
import ChatSendMessage from '@/components/ChatSendMessage';
import ChatListMessage from '@/components/ChatListMessage';


export default {
  name: 'App',
  components: {
    ChatSendMessage,
    ChatListMessage
  },
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
