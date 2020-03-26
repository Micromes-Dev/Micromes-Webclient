<template>
  <div class="panel verticalFullWindowSize scrollable noScrollbar">
    <h2>Our connections</h2>
    <ul>
      <li>
        <router-link to="/" class="nav_element">Home</router-link>
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
import { Component, Vue } from "vue-property-decorator";
import GoogleAuth from "vue-google-oauth";
import VueSessionStorage from "vue-sessionstorage";
import Authenticate from "@/scripts/sdk/authentication.ts";

const auth: Authenticate = new Authenticate();
//const axios = require('axios');

@Component
export default class SidePanel extends Vue {
  loggedIn: boolean = false;
  id_token: string = "";

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
    this.id_token = sessionStorage.getItem("id_token");
    console.log(this.id_token);
    if (this.id_token) {
      this.loggedIn = true;
    }
    auth.authorizationHeader(this.id_token);
  }

  signIn() {
    auth.id_token = this.id_token;
    Vue.googleAuth().signIn(auth.signInSuccess, auth.onSignInError);
  }

  signOut() {
    Vue.googleAuth().signOut(auth.serverSignout);
  }
}
</script>

<style scoped>
.panel {
  width: 100%;
  height: 100vh;
  background-color: rgb(42, 42, 42);
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