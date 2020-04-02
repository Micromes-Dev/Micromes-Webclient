<template>
  <div class="middledark">
    <ChannelComp 
      v-for="channel in getChannels()"
      v-bind:key="channel.guildId"
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
    let guild = this.$store.state.cache.getGuild(this.$route.params.guildId)
    //console.log(guild)
    let a = this.$store.state.cache.getChannels(guild)
    return a
  }
}
</script>

<style scoped>
</style>