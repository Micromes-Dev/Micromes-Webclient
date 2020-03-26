<template>
  <nav class="sticky">
    <div name="table" class="content">
      <div id="left" class="column">
        <ul>
          <router-link to="/" class="nav_element">Home</router-link>
          <router-link to="/graphql" class="nav_element">GraphQL</router-link>
        </ul>
      </div>
      <div id="right" class="column">
        <ul>
          <!-- login Button -->
          <a id="signin-button" v-on:click="signIn">
            <i class="fa fa-google-plus-official fa-3x"></i>
            Sign in
          </a>

          <!--<router-link to="/myaccount" class="nav_element account" v-if="loggedIn">Your Account</router-link>
          <router-link to="/signin" class="nav_element account" v-else>Sign in</router-link>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GoogleAuth from "vue-google-oauth";
import VueSessionStorage from "vue-sessionstorage";
const axios = require("axios");

@Component
export default class Nav extends Vue {
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
    this.authorizationHeader(this.id_token);
  }

  authorizationHeader(id_token: String) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${id_token}`;
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common["Access-Control-Allow-Methods"] =
      "GET, POST, PATCH, PUT, DELETE, OPTIONS";
    axios.defaults.headers.common["Access-Control-Allow-Headers"] =
      "Origin, Content-Type, X-Auth-Token";
    axios
      .post(
        "http://micromesauthredirect.net:8080/api",
        { action: "dashboard" },
        {}
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  //#region google signin
  signInSuccess(googleUser) {
    this.loggedIn = true;
    this.id_token = googleUser.getAuthResponse().id_token;
    sessionStorage.setItem("id_token", this.id_token);
    this.authorizationHeader(this.id_token);
    console.log(googleUser);
  }

  signIn() {
    Vue.googleAuth().signIn(this.signInSuccess, this.onSignInError);
  }

  signOut() {
    Vue.googleAuth().signOut(this.signOut);
  }
  onSignInError(error) {
    console.log("GOOGLE SERVER - SIGN-IN ERROR", error);
  }
  //#endregion
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0.1%;
  font-family: "Ubuntu", sans-serif;
  color: white;
  text-decoration: none;
}

nav {
  background-color: rgba(17, 17, 17, 0.5);
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;
  list-style: none;
  margin-top: -4.5%;
}

.nav_element {
  text-decoration: none;
  color: #fff;
  transition: all 0.5s ease-out;
  text-align: left;
  list-style: none;
  display: inline-block;
  padding-left: 2%;
  color: white;
}

.nav_element:hover,
.nav_element:focus {
  text-decoration: none;
  color: rgb(29, 252, 0);
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  overflow: visible;
}

.content {
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 90% 10%;
}

.googleSignIn {
  color: grey;
}

.account {
}

.column {
  display: inline-grid;
}

#left {
}

#right {
}
</style>
