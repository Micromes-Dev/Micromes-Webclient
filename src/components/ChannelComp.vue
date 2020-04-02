<template> 
  <div>
    <div class="indicator white" v-if="activated"/>
    <div class="miniindic white" v-if="hover && !activated"/>
    <div class="comp lightblue marg">
    #{{ channel.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator"
import { Channel } from '../scripts/sdk/Interfaces'

@Component
export default class ChannelComp extends Vue {
  @Prop({ required: true }) private channel: Channel

  private activated: boolean = false
  private hover: boolean = false

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.activated = this.$route.params.channelID == this.channel.uuid
  }

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