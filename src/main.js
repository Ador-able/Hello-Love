import 'normalize.css/normalize.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueTypedJs from 'vue-typed-js'

import './styles/index.scss'

Vue.config.productionTip = false

Vue.use(VueTypedJs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
