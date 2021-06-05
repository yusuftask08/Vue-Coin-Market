import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pData: null,

  },
  mutations: {
    setData(state, pData) {
      state.pData = pData;
    },

  },
  actions: {
    getData({
      commit,

    }) {
      const req = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=6&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y";

      axios.get(`${req}`).then(response => {
        console.log('response :>> ', response.data);
        commit('setData', response.data)

      })
      setInterval(() => {
        axios.get(`${req}`).then(response => {
          console.log('response :>> ', response.data);
          commit('setData', response.data)

        })
      }, 1000);

    },

  },
  getters: {
    getpData(state) {
      return state.pData;
    },

  }
})