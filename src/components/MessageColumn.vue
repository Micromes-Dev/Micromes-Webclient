<template>
  <div class="flex updown dark">
    <div class="flexbox middledark padded">
      {{ this.$store.state.currentGuild.name }} # {{ this.$store.state.currentGuild.id }}/{{ this.$store.state.channelID }}
    </div>
    <div class="flexbox fullheight padded">
      <message-comp
        v-for="message in $store.getters.currentMessages"
        v-bind:key="message.id"
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
import { mapGetters } from 'vuex'
import MessageComp from './MessageComp.vue'
import MessageSend from './MessageSend.vue'

@Component({
  components: {
    MessageComp,
    MessageSend
  }
})
export default class MessageColumn extends Vue {

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.$store.dispatch('fetchMessagesForChannel', this.$route.params.channelId)
  }
}
</script>

<style scoped>

</style>