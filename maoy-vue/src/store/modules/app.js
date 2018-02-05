export default {
  state: {
    currentIndex: 0
  },
  getters: {
    currentIndex: state => state.currentIndex
  },
  mutations: {
    INDEX: (state, index) => {
      state.currentIndex = index
    }
  },
  actions: {
    SET_INDEX ({commit}, data) {
      commit('INDEX', data)
    }
  }
}
