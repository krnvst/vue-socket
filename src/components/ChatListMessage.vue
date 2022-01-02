<template>
  <div class="chat-list-message">
    <ul>
        <li v-for="message in CHAT_DATA" :key="message">
            {{ message }}
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatListMessage",
  computed: {
    ...mapGetters(['CHAT_DATA']),
  },
  components: {},
  data: () => ({}),
};
</script>

<style scoped>
.chat-list-message {
}
</style>