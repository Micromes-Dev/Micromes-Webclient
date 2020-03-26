import Vue from 'vue'
import Messenger from './Messenger.vue'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Messenger)
}).$mount('#app')
