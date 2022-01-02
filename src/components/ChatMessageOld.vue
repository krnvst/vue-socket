<template>
    <div id="app">
        <div class="container">
            <div class="col-lg-6 offset-lg-3">

                <div v-if="ready">
                    <p v-for="user in info" :key="user.username">
                        {{user.username}} {{user.type}}
                    </p>
                </div>

                <div v-if="!ready">
                    <h4>Enter your username</h4>
                    <form @submit.prevent="addUser">
                        <div class="form-group row">
                            <input type="text" class="form-control col-9" v-model="username"
                                placeholder="Enter username here">
                            <input type="submit" value="Join" class="btn btn-sm btn-info ml-1">

                        </div>
                    </form>
                </div>
                <h2 v-else>{{username}}</h2>
                <div class="card bg-info" v-if="ready">
                    <div class="card-header text-white">
                        <h4>My Chat App <span class="float-right">{{connections}} connections</span></h4>
                    </div>
                    <ul class="list-group list-group-flush text-right">
                        <small v-if="typing" class="text-white">{{typing}} is typing</small>
                        <li class="list-group-item" v-for="message in messages" :key="message">
                            <span :class="{'float-left':message.type === 1}">
                                {{message.message}}
                                <small>:{{message.user}}</small>
                            </span>
                        </li>
                    </ul>

                    <div class="card-body">
                        <form @submit.prevent="send">
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="newMessage"
                                    placeholder="Enter message here">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'ChatMessage',
  data: () => ({
      socket: io(),
      newMessage: null,
      messages: [],
      typing: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
  }),
        created() {
            window.onbeforeunload = () => {
                this.socket.emit('leave', this.username);
            }
            
            this.socket.on('chat-message', (data) => {
                this.messages.push({
                    message: data.message,
                    type: 1,
                    user: data.user,
                });
            });

            this.socket.on('typing', (data) => {
                this.typing = data;
            });


            this.socket.on('stopTyping', () => {
                this.typing = false;
            });

            this.socket.on('joined', (data) => {
                this.info.push({
                    username: data,
                    type: 'joined'
                });

                setTimeout(() => {
                    this.info = [];
                }, 5000);
            });

            this.socket.on('leave', (data) => {
                this.info.push({
                    username: data,
                    type: 'left'
                });

                setTimeout(() => {
                    this.info = [];
                }, 5000);
            });

            this.socket.on('connections', (data) => {
                this.connections = data;
            });
        },

        watch: {
            newMessage(value) {
                value ? this.socket.emit('typing', this.username) : this.socket.emit('stopTyping')
            }
        },

        methods: {
            send() {
                this.messages.push({
                    message: this.newMessage,
                    type: 0,
                    user: 'Me',
                });

                this.socket.emit('chat-message', {
                    message: this.newMessage,
                    user: this.username
                });
                this.newMessage = null;
            },

            addUser() {
                this.ready = true;
                this.socket.emit('joined', this.username)
            }
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat {
  display: flex;
  flex-direction: row;
}
.chat__login {
  width: 100%;
  border: 1px solid red;
}
.chat__maessage {
  width: 100%;
  border: 1px solid red;
}
</style>
