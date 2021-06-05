import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style.css"
import Trend from "vuetrend"
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, {
  props: {
    spinner: 'default',
    /* other props need to configure */
  },
  system: {
    throttleLimit: 10,
    /* other settings need to configure */
  },
});
Vue.use(Trend)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')