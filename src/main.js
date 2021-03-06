import Vue from 'vue'
import App from './App'
// import router from './router'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App)
})
