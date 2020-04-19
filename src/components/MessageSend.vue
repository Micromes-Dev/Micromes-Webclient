<template>
  <div class="sender flex leftright">
    <input type="text" v-model="text" class="cyan text flexbox fullwidth"/>
    <input type="submit" class="cyan button flexbox" value="send" @click="send"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class MessageSend extends Vue {

  private text: string = ""

  send() {
    this.$store.state.be.sendMessage(this.text, this.$route.params.channelId)
  }
}
</script>