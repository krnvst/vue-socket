<template>
  <div class="chat">
    <input type="text" placeholder="name" v-model="user" />
    <input type="text" placeholder="message" v-model="text" @keyup.enter="sendMessage" />
    <button @click="sendMessage">Отправить</button>
  </div>
</template>

<script>
import SocketioService from "@/services/socketio.service.js";

export default {
  name: "ChatSendMessage",
  components: {},
  data: () => ({
    user: null,
    text: "",
    typing: false,
  }),
  methods: {
    sendMessage() {
      SocketioService.sendMessage(this.user, this.text);
      this.text = "";
    },
  },
};
</script>

<style scoped>
.chat {
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
</style>