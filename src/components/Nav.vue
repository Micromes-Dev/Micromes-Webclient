<template>
   <nav class="sticky">
      <div name="table" class="content">
         <div id="left" class="column">
            <ul>
               <router-link to="/" class="nav_element">Home</router-link>
               <router-link to="/graphql" class="nav_element">GraphQL</router-link>
               <a href="/login">Login</a>
            </ul>
         </div>
      <div id="right" class="column">
         <ul>
            <router-link to="/myaccount" class="nav_element account" v-if="loggedIn">Your Account</router-link>
            <router-link to="/signin" class="nav_element account" v-else>Sign in</router-link>
            
         </ul>
      </div>
    </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
   loggedIn: boolean = false;
   username: string = "";
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

.content{
    color: white;
    width: 100%;
    display: grid;
    grid-template-columns: 90% 10%;
}

.account{
   
}

.column{
    display: inline-grid;
}

#left{
    
}

#right{
  
}
</style>
