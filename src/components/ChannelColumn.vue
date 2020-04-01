<template>
  <div class="padded middledark">
    <p>Channels</p><br/>
    <ChannelComp 
      v-for="channel in channels"
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
  private channels : Channel[] = 
  [{
    name: "welcome",
    checksum: 1,
    uuid: "1"
  },
  {
    name: "text",
    checksum: 1,
    uuid: "2"
  }]
}
</script>

<style scoped>
</style>