<template>
  <div class="scrollable noScrollbar dark flex updown">
    <div
      class="flexbox"
      v-for="guild in $store.state.guilds"
      :key="guild.id">
      <guild-bar-comp
      v-bind:key="guild.id"
      v-bind:guild="guild"
      v-bind:channels="guild.channels"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GuildBarComp from "@/components/GuildBarComp.vue";
import { Guild } from '../scripts/sdk/Interfaces';

@Component({
  components: {
    GuildBarComp
  }
})
export default class GuildBar extends Vue {
  private vue: any = Vue;
}
</script>

<style scoped>

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