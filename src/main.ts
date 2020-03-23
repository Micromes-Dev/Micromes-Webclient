import Vue from 'vue'
import Messenger from './Messenger.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Messenger)
}).$mount('#app')
