<template>
  <chat-send-message />
  <chat-list-message />
</template>

<script>
// socket
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
