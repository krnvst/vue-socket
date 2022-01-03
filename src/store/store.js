import { createStore } from 'vuex';

const store = createStore({
	state: {
		chatData: []
	},
	mutations: {
    SET_CHAT_DATA: (state, data) => {
      state.chatData.push(data);
      localStorage.setItem('message', JSON.stringify(state.message));
    },
	},
	actions: {
		SET_CHAT_DATA({ commit }, data) {
			commit('SET_CHAT_DATA', data);
		},
	},
	getters: {
		CHAT_DATA: (state) => state.chatData
	}
})

export default store;
