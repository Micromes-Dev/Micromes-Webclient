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
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Guild from "@/components/Guild.vue";

@Component({
  components: {
    Guild
  }
})
export default class GuildBar extends Vue {
  private vue: any = Vue;

  mounted() {}
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