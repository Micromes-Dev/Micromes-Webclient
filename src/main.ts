import Vue from 'vue'
import Messenger from './Messenger.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
const GAuth = require('vue-google-oauth2-gapi')

//const GoogleAuth = require("vue-google-oauth")
const VueSessionStorage = require("vue-sessionstorage")
import VueCookies from "vue-cookies-ts";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Messenger)
}).$mount('#app')

Vue.use(VueCookies)
Vue.use(VueSessionStorage)
/*Vue.use(GoogleAuth, {
  client_id:
    "1025113353398-pb40di8kma99osibf68j8ov8fqvddr96.apps.googleusercontent.com"
})*/
Vue.use(GAuth, {
  clientId: '1025113353398-pb40di8kma99osibf68j8ov8fqvddr96.apps.googleusercontent.com',
  scope: 'profile email https://www.googleapis.com/auth/plus.login'
})