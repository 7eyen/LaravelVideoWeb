// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from "vue-awesome-swiper/src"
import 'swiper/dist/css/swiper.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)

axios.defaults.baseURL = "https://7eyen.000webhostapp.com/api/"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
