<template>
   <div id="app">
      <Nav/>
      <div>{{name}}</div>
      <h1>hi</h1>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import { graphql, buildSchema } from 'graphql';
import Nav from './components/Nav.vue';
import VueCookies from 'vue-cookies-ts';


@Component({
  components: {
     Nav,
  },
})
export default class Messenger extends Vue {
   name = []

   onLogin(): void{
      
      this.name = this.$cookies.keys();
   }

   mounted(){
      Vue.use(VueCookies);
      this.onLogin();
   }
}
</script>

<style>
#app{
   font-family: Avenir, Helvetica, Arial, sans-serif;
   color: rgb(66, 219, 66);
}

* {
    padding: 0;
    margin: 0.1%;
    font-family: 'Ubuntu', sans-serif;
    color: white;
    text-decoration: none;
}
</style>