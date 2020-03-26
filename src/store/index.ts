import Vue from 'vue'
import Vuex from 'vuex'
import Cache from '../scripts/sdk/Cache';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cache: new Cache()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
