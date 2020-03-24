import Vue from 'vue'
import Messenger from './Messenger.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(Messenger)
}).$mount('#app')
