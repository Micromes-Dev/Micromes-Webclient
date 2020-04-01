<template>
  <div id="app" class="content verticalFullWindowSize">
    <GuildBar class="column left verticalFullWindowSize guildbar" />
    <GuildComp class="column verticalFullWindowSize"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import GuildBar from "./components/GuildBar.vue";
import GuildComp from "./components/GuildComp.vue";
import { User } from "./scripts/sdk/Interfaces";

@Component({
  components: {
    Route,
    GuildBar,
    User,
    GuildComp
  }
})
export default class Messenger extends Vue {
  getCookie(name: string): string | undefined {
    var nameEQ = name + "="
    var ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null;
  }

  mounted() {
    var cookie = this.getCookie("micromesJWt")
    var encodedJWTData = cookie.substring(
      cookie.indexOf(".") + 1,
      cookie.lastIndexOf(".")
    )
    var decodedJWTData = atob(encodedJWTData)
    this.$store.state.cache.jwtData = decodedJWTData
  }

  @Watch("$route", { immediate: true, deep: true })
  onURLChange(route: Route) {
    this.$store.state.cache.curGuild = route.params.guildId
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



.verticalFullWindowSize {
  height: 100vh;
}
</style>

<style scoped>
.content {
  display: flex;
  color: white;
  width: 100%;
  grid-template-columns: auto auto;
  background-color: #00171F;
}

.column {
  display: flexbox;
}

.left.guildbar {
  background-color: #202225;
}

.right {
  background-color: #36393f;
}
</style>