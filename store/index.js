
const state = () => {
  return {
    artist: '你好啊'
  }
}

const mutations = {
  // 头部导航产品与新闻信息
  setHeadProdNav(state, data) {
    state.artist = data
  },
  setHeadNewsNav(state, data) {
    state.headNewsNav = data
  },
  setHeadJobNav(state, data) {
    state.headJobNav = data
  },
  setIndexLinksData(state, data) {
    state.indexLinksData = data
  },
  // setIndexShowLinks(state,bool){
  // 	state.indexShowLinks = bool
  // }
}

const getters = {}

const actions = {
  // async nuxtServerInit({ commit }, data) {
  //   console.log('store', data)
  //   const proFn = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(66)
  //       }, 1000)
  //     })
  //   }
  //   await proFn()
  //   // console.log('AA', data)
  //   commit('setHeadProdNav', data)
  // },
  async getCityData({ commit }, data) {
    console.log('store', data)
    const proFn = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(66)
        }, 1000)
      })
    }
    await proFn()
    // console.log('AA', data)
    commit('setHeadProdNav', data)
  },
}


export default {
  state,
  getters,
  mutations,
  actions
}