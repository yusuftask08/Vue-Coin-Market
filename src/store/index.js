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
    }
  },
  actions: {
    getData({ 
      commit
    }) {
      const apiKey = "e155d0a6b8f354183d85f8917ee205a5";

      axios.get(`https://api.nomics.com/v1/currencies?key=${apiKey}&ids=BTC,ETH,XRP,CHZ,TRX,DOT,DOGE,HOT,RVN,CHZ,BTT,BNB,USDT`).then(response => {
        console.log('response :>> ', response.data);
        commit('setData', response.data)
      })
    }
  },
  getters: {
    getpData(state) {
      return state.pData;
    }
  }
})