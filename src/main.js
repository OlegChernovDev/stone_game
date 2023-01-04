import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './ml'

import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
import './../node_modules/papercss/dist/paper.css';

Vue.config.productionTip = false


new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
