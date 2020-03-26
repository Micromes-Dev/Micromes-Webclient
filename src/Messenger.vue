<template>
  <div id="app" class="content verticalFullWindowSize">
    <div class="column left verticalFullWindowSize">
      <GuildBar class="guildbar"/>
    </div>
    <div class="column">
      <router-view class="right"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { graphql, buildSchema } from 'graphql';
import VueCookies from "vue-cookies-ts";
import GuildBar from "./components/GuildBar.vue";

@Component({
  components: {
    GuildBar
  }
})
export default class Messenger extends Vue {
  mounted() {
    Vue.use(VueCookies)
    
    console.log(this.$store.state.cache.test);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

* {
  padding: 0;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  color: white;
  text-decoration: none;
}

.container {
  background-color: #36393f;
}

.column {
  display: inline-grid;
}

.verticalFullWindowSize {
  height: 100vh;
}
</style>

<style scoped>
.content {
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 5% 95%;
  background-color: #36393f;
}

.left {
}

.right {
  margin: 1%;
  background-color: #36393f;
}

.guildbar{

}
</style>