<template>
  <div class="middledark">
    <ChannelComp 
      v-for="channel in this.$store.state.currentGuild.channels"
      v-bind:key="channel.guildId"
      v-bind:channel="channel"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Channel } from '../scripts/sdk/Interfaces'
import ChannelComp from './ChannelComp.vue'

@Component({
  components: {
    ChannelComp
  }
})
export default class ChannelColumn extends Vue {
}
</script>

<style scoped>
</style>