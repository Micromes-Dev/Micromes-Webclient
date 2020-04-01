<template>
  <div class="comp lightblue">
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
.comp {
  border-radius: 5px;
  padding: 5px;
  font-size: 0.9rem;
  background-color: #007EA7;
  width: 120px;
  padding: 5px;
  margin-bottom: 10px;
}
</style>