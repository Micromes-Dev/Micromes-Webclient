<template>
  <div class="guildbar panel verticalFullWindowSize scrollable noScrollbar">
    <ul>
      <li>
        <Guild/>
      </li>
      <li>
        <router-link to="/graphql" class="nav_element">GraphQL</router-link>
      </li>
      <li>
        <a id="signin-button" v-on:click="signIn">
          <i class="fab fa-google"></i>
          Sign in
        </a>
      </li>
    </ul>
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from "vue-property-decorator"
import GoogleAuth from "vue-google-oauth"
import VueSessionStorage from "vue-sessionstorage"
import Authenticate from "@/scripts/sdk/authentication"
import Guild from "./components/Guild.vue"

const auth: Authenticate = new Authenticate()
//const axios = require('axios');

@Component
export default class GuildBar extends Vue {

  mounted() {
    //init important libs
    Vue.use(VueSessionStorage);
    Vue.use(GoogleAuth, {
      client_id:
        "1025113353398-pb40di8kma99osibf68j8ov8fqvddr96.apps.googleusercontent.com"
    });
    //init google auth
    Vue.googleAuth().load();
    Vue.googleAuth().directAccess();
    this.$store.state.cache.id_token = sessionStorage.getItem("id_token");
    console.log(this.$store.state.cache.id_token);
    if (this.$store.state.cache.id_token) {
      this.$store.state.cache.loggedIn = true;
    }
    auth.authorizationHeader(this.$store.state.cache.id_token);
    this.$store.state.cache.test = "hallo1"
  }

  signIn() {
    auth.id_token = this.$store.state.cache.id_token;
    Vue.googleAuth().signIn(auth.signInSuccess, auth.onSignInError);
  }

  signOut() {
    Vue.googleAuth().signOut(auth.serverSignout);
  }
}
</script>

<style scoped>

.guildbar.panel {
  width: 100%;
  height: 100vh;
  background-color: #202225;
  display: inline-block;
  text-decoration: none;
}

.scrollable {
  overflow-y: scroll;
  overflow-x: hidden;
  line-height: 3em;
}

.noScrollbar {
  box-sizing: content-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.noScrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>