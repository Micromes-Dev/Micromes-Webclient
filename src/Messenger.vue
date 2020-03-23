<template>
   <div id="app">
      <Nav/>
      <router-view/>
      <h1>hi</h1>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from './components/Nav.vue';

@Component({
  components: {
     Nav,
  },
})
export default class Messenger extends Vue {}
</script>

<style>
#app{
   font-family: Avenir, Helvetica, Arial, sans-serif;
   color: rgb(66, 219, 66);
}
</style>