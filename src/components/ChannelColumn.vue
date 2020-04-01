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
    name: "Welcome",
    checksum: 1,
    uuid: "1"
  }
}
</script>

<style scoped>
<<<<<<< HEAD

.container {
  background-color: #003459;
}

=======
.container{
  width: 100%;
  background-color: darkkhaki;
}
>>>>>>> f9c6296cbf4bf6a16ba503b7d1259c8912eb4f2f
</style>