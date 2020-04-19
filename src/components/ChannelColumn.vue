<template>
  <div class="middledark">
    <channel-comp 
      v-for="channel in this.$store.state.currentGuild.channels"
      v-bind:key="channel.guildId"
      v-bind:channel="channel"/>
    <NewChannelComp/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Channel } from '../scripts/sdk/Interfaces'
import ChannelComp from './ChannelComp.vue'
import NewChannelComp from './NewChannelComp.vue'


@Component({
  components: {
    ChannelComp,
    NewChannelComp
  }
})
export default class ChannelColumn extends Vue {
}
</script>

<style scoped>
</style>