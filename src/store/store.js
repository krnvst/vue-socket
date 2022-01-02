import { createStore } from 'vuex';

const store = createStore({
	state: {
		message: []
	},
	mutations: {
    SET_MESSAGE: (state, payload) => {
      state.message.push(payload);
      localStorage.setItem('message', JSON.stringify(state.message));
    },
	},
	actions: {
		SET_MESSAGE({ commit }, payload) {
			commit('SET_MESSAGE', payload);
		},
	},
	getters: {
		CHAT_DATA: (state) => state.message
	}
})

export default store;
