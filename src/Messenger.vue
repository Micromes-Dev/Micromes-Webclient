<template>
  <div id="app" class="content">
    <SidePanel class="column verticalFullWindowSize" />
    <router-view class="column verticalFullWindowSize" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { graphql, buildSchema } from 'graphql';
import Nav from "./components/Nav.vue";
import VueCookies from "vue-cookies-ts";
import SidePanel from "./components/SidePanel.vue";

@Component({
  components: {
    Nav,
    SidePanel
  }
})
export default class Messenger extends Vue {
  name = [];

  onLogin(): void {
    this.name = this.$cookies.keys();
  }

  mounted() {
    Vue.use(VueCookies);
    this.onLogin();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: rgb(66, 219, 66);
}

* {
  padding: 0;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  color: white;
  text-decoration: none;
}

.container {
  background-color: rgba(17, 17, 17, 0.5);
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
  grid-template-columns: 10% 90%;
}
</style>