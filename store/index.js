export const state = () => ({
  userInfo: {},
})

export const getter = {
  getCounter(state) {
    return state.counter
  },
  getUserInfo(state) {
    return state.userInfo
  }
}

export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}
