<template>
  <div class="white font flex leftright">
    <input v-model="name" class="font" type="text"/>
    <input class="dark" type="submit" value="*" @click="newChannel">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Guild } from '../scripts/sdk/Interfaces';

@Component
export default class NewChannelComp extends Vue {
  
  private name: string = ""

  newChannel() {
    console.log("New Channel")
    this.$store.state.be.createGuildChannel(this.name, this.$route.params.guildId)
    this.$store.dispatch('fetchGuilds')
  }
}
</script>

<style scoped>

input {
  border: none;
  outline: none;
  border-radius: 0;
  padding: 0;
  margin: 0;
}

.font {
  color: black;
}
</style>