export const state = () => ({
  list: [],
})

export const mutations = {
  set(state, data) {
    state.list = data
  },
}

export const getters = {
  getList: (state) => {
    return state.list
  },
}

export const actions = {
  async get({ commit }) {
    await this.$http
      .get(`${this.$config.apiURL}/5fcf051d-2867-4698-8c1c-df076b4d2948`)
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  },
}
