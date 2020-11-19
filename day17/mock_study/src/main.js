import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/index'
import axios from 'axios'

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
