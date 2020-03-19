import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  user: {
    name: null
  }
  ,
  teams: [],
  boards: []
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: process
})

