<template>
  <div class="chat-list-message">
    <ul>
      <li v-for="item in CHAT_DATA" :key="item.message">
        {{ item.user }}: {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatListMessage",
  computed: {
    ...mapGetters(["CHAT_DATA"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.chat-list-message {
  text-align: left;
}
</style>