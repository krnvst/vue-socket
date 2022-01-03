<template>
  <div class="chat">
    <input type="text" placeholder="user" v-model="user" />
    <input type="text" placeholder="text" v-model="text" @keyup.enter="sendMessage" />
    <button @click="sendMessage">Отправить</button>
  </div>
</template>

<script>
import SocketioService from "@/services/socketio.service.js";

export default {
  name: "ChatSendMessage",
  components: {},
  data: () => ({
    text: "",
    messages: [],
    typing: false,
    user: null,
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
}
</style>