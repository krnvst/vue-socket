<template>
  <div class="chat-list-message">
    <p>Сейчас онлайн: {{ CONNECTIONS_COUNT }}</p>
    <ul>
      <li v-for="item in CHAT_DATA" :key="item.message">
        <b>{{ item.user }}:</b> {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatListMessage",
  computed: {
    ...mapGetters(["CHAT_DATA", "CONNECTIONS_COUNT"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.chat-list-message {
}
</style>