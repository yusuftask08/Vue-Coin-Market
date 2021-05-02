import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pData: null,
    pSparkData: null,
    pCurData: null,
    apiKey: "e155d0a6b8f354183d85f8917ee205a5",
    ID: "BTC,ETH,XRP,CHZ,TRX,DOT,DOGE,HOT,RVN,CHZ,BTT,BNB,USDT",
  },
  mutations: {
    setData(state, pData) {
      state.pData = pData;
    },
    setSparkData(state, pSparkData) {
      state.pSparkData = pSparkData;
    },
    setCurData(state, pCurData) {
      state.pCurData = pCurData;
    }
  },
  actions: {
    getData({
      commit,
      state
    }) {
      axios.get(`https://api.nomics.com/v1/currencies?key=${state.apiKey}&ids=${state.ID}`).then(response => {
        console.log('response :>> ', response.data);
        commit('setData', response.data)
      })
    },
    getSparkData({
      commit,
      state
    }) {

      axios.get(`https://api.nomics.com/v1/currencies/sparkline?key=${state.apiKey}&ids=${state.ID}&start=2021-04-14T00%3A00%3A00Z`)
        .then(spark_data => {
          console.log('spark_response :>> ', spark_data.data);
          commit('setSparkData', spark_data.data)
        })
    },
    getCurrenciesData({
      commit,
      state
    }) {
      axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${state.apiKey}&ids=${state.ID}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
        .then(currencies_data => {
          console.log('currencies_data :>> ', currencies_data.data);
          commit('setCurData', currencies_data.data)
        })
    },
    getCurSetInt({
      commit,
      state
    }) {

      let UPDATE_INTERVAL = 5000;
      setInterval(() => {
        axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${state.apiKey}&ids=${state.ID}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
          .then(currencies_data => {
            // console.log('currencies_data :>> ', currencies_data.data);
            commit('setCurData', currencies_data.data)
          })
      }, UPDATE_INTERVAL);
    }
  },
  getters: {
    getpData(state) {
      return state.pData;
    },
    getpSparkData(state) {
      return state.pSparkData;
    },
    getpCurData(state) {
      return state.pCurData;
    }
  }
})