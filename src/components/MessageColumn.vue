<template>
  <div class="flex updown dark">
    <div class="flexbox middledark padded">
      {{ getGuildName() }} / {{ getChannelName() }}
    </div>
    <div class="flexbox fullheight padded">
      <message-comp
        v-for="message in messages"
        v-bind:key="message.uuid"
        v-bind:message="message"/>
    </div>
    <div class="flexbox padded">
      <message-send/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { Message, User, Guild, Channel } from "../scripts/sdk/Interfaces"
import MessageComp from './MessageComp.vue'
import MessageSend from './MessageSend.vue'

@Component({
  components: {
    MessageComp,
    MessageSend
  }
})
export default class MessageColumn extends Vue {

  private notSelected : boolean = true

  private messages: Message[] = []

  getGuildName() : string {
    let a : Guild | undefined = this.$store.state.cache.getGuild(this.$route.params.guildId)
    if (a == undefined) {
      this.notSelected = true
      return "-"
    }
    this.notSelected = false
    return a.name
  }

  getChannelName() : string {
    let a : Channel | undefined = this.$store.state.cache.getChannel(this.$route.params.channelId)
    if (a == undefined) {
      this.notSelected = true
      return "-"
    }
    this.notSelected = false
    return a.name
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.$store.dispatch('fetchMessagesForChannel', this.$route.params.channelId)
    this.messages = this.$store.state.messagesByChannel.get(this.$route.params.channelId)
  }
}
</script>

<style scoped>

</style>