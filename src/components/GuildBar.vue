<template>
  <div class="guildbar panel verticalFullWindowSize scrollable noScrollbar">
    <ul>
      <li>
        <Guild></Guild>
      </li>
      <li>
        <router-link to="/graphql" class="nav_element">GraphQL</router-link>
      </li>
      <li>
        
        <!--<a id="signin-button" v-on:click="signIn">
          <i class="fab fa-google"></i>
          Sign in
        </a>-->
        <!--<iframe src="http://micromes.net:8080/googleLogIn.html" frameborder="0" />-->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
//import Authenticate from "@/scripts/sdk/authentication.ts"
import Guild from "@/components/Guild.vue"

//const auth: Authenticate = new Authenticate()

//const axios = require('axios');

@Component({
  components: {
    Guild
  }
})
export default class GuildBar extends Vue {
  private vue: any = Vue;
  
  signIn(){
    /*console.log("open window");
    var popup:Window  = window.open("http://micromes.net:8080/googleLogIn.html",'Authenticate','scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0');
    console.log("blur window");
    popup.blur();
    popup.resizeTo(0,0)
    console.log("focus correct window");
    window.focus();
    console.log("get element from new window");
    var element:HTMLElement = popup.document.getElementById("returnValue");
    console.log(document)
    console.log(element)
    console.log("wait for window");
    while(element.innerHTML == ""){
      console.log(".")
    }
    console.log("print element html");
    console.log(element.innerHTML);
    popup.close();
    //await auth.authenticate();*/
  }

  mounted(){
  }

  /*mounted() {
    //init important libs
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
  }*/

  
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