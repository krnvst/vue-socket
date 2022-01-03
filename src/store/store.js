import { createStore } from 'vuex';

const store = createStore({
	state: {
		chatData: [],
		connectionsCount: 0
	},
	mutations: {
		UPDATE_CHAT_DATA: (state, data) => {
			state.chatData.push(data);
			localStorage.setItem('chatData', JSON.stringify(state.message));
		},
		UPDATE_CONNECTIONS_COUNT: (state, count) => {
			state.connectionsCount = count
			localStorage.setItem('connections', count);
		},
	},
	actions: {
		SET_CHAT_DATA({ commit }, data) {
			commit('UPDATE_CHAT_DATA', data);
		},
		SET_CONNECTIONS_COUNT({ commit }, data) {
			commit('UPDATE_CONNECTIONS_COUNT', data);
		},
	},
	getters: {
		CHAT_DATA: (state) => state.chatData,
		CONNECTIONS_COUNT: (state) => state.connectionsCount
	}
})

export default store;
