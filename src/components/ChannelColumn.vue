<template>
  <div class="container">
    <ChannelComp v-bind:channel="channel"/>
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
  private channel : Channel = {
    name: "welcome",
    checksum: 1,
    uuid: "1"
  }
}
</script>

<style scoped>
.container{
  padding: 5px;
}
</style>