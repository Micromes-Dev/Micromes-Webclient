<template> 
  <div class="flex">
    <div class="indicator white" v-if="activated"/>
    <div class="miniindic white" v-if="hover && !activated"/>
    <div class="comp lightblue marg" @click="changeChannel" @mouseover="hover = true" @mouseleave="hover = false">
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

  changeChannel() {
    this.$router.push({ path: `/${this.$route.params.guildId}/${this.channel.id}` })
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.activated = this.$route.params.channelId == this.channel.id
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

.indicator {
  height: 20px;
  width: 5px;
  margin: auto;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.miniindic {
  height: 15px;
  width: 5px;
  margin: auto;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>