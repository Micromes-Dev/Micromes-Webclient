import Vue from 'vue'
import Messenger from './Messenger.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const GoogleAuth = require("vue-google-oauth")
const VueSessionStorage =  require("vue-sessionstorage")

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Messenger)
}).$mount('#app')

Vue.use(VueSessionStorage);
Vue.use(GoogleAuth, {
  client_id:
    "1025113353398-pb40di8kma99osibf68j8ov8fqvddr96.apps.googleusercontent.com"
});