<template>
    <div class='chat'>
        <input type="text" v-model="text" @keyup.enter="sendMessage" />
        <button @click="sendMessage">ferfre</button>
    </div>
</template>

<script>
import SocketioService from '@/services/socketio.service.js';

export default {
    name: 'ChatSendMessage',
    components: {
    },
    data: () => ({
        text: ''
    }),
    methods: {
        sendMessage() {
            SocketioService.sendMessage(this.text);
            this.text = ''
        }
    },
};
</script>

<style scoped>

.chat {
}
</style>