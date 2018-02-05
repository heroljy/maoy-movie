export default {
  state: {
    currentIndex: 0,
    currentCity: {
      cname: '北京',
      id: 2189
    }
  },
  getters: {
    currentIndex: state => state.currentIndex,
    city: state => state.city
  },
  mutations: {
    INDEX: (state, index) => {
      state.currentIndex = index
    },
    CITY: (state, city) => {
      state.currentCity = city
    }
  },
  actions: {
    SET_INDEX ({commit}, data) {
      commit('INDEX', data)
    },
    SET_CITY ({commit}, data) {
      commit('CITY', data)
    }
  }
}
