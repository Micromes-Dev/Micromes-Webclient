<template>
  <div class="middledark">
    <ChannelComp 
      v-for="channel in getChannels()"
      v-bind:key="channel.uuid"
      v-bind:channel="channel"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Channel } from '../scripts/sdk/Interfaces'
import ChannelComp from './ChannelComp.vue'

@Component({
  components: {
    ChannelComp
  }
})
export default class ChannelColumn extends Vue {

  getChannels() : Array<Channel>{
    let a = this.$store.state.cache.getChannels(this.$store.state.cache.getGuild(this.$route.params.guildId))
    return a
  }
}
</script>

<style scoped>
</style>