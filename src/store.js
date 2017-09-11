export default {
  state: {
    message: 'Hello!'
  },

  getters: {
    message: state => state.message
  },

  actions: {
    setMessage ({ commit, state }, data) {
      commit('setMessage', data);
    }
  },

  mutations: {
    setMessage (state, data) {
      state.message = data;
    }
  }
};
