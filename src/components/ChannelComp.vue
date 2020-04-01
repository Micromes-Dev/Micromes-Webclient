<template>
  <div class="container">
    #{{ channel.name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Channel } from '../scripts/sdk/Interfaces'

@Component
export default class ChannelComp extends Vue {
    @Prop({ required: true }) private channel: Channel
}
</script>

<style scoped>
.container {
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  font-size: 0.9rem;
}
</style>