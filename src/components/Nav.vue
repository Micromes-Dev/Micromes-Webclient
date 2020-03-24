<template>
   <nav class="sticky">
      <ul>
        <router-link to="/" class="nav_element">Home</router-link>
        <router-link to="/releases" class="nav_element">Releases</router-link>
          
        <router-link to="/myaccount" class="nav_element account" v-if="loggedIn">Your Account</router-link>
        <router-link to="/signin" class="nav_element account" v-else>Sign in</router-link>
      </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
   loggedIn: boolean = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    padding: 0;
    margin: 0.1%;
    font-family: 'Ubuntu', sans-serif;
    color: white;
    text-decoration: none;
}

nav{
    background-color: rgba(17,17,17,0.5);
    padding-bottom: 20px;
    padding-top: 20px;
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
.nav_element:focus{
    text-decoration: none;
    color: rgb(29, 252, 0);
}

.sticky{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    overflow: visible;
}
</style>
