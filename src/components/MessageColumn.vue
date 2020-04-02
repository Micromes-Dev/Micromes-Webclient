<template>
  <div class="container dark padded">
    Messages
    <div class="top">
      <message-comp
        v-for="message in messages"
        v-bind:key="message.uuid"
        v-bind:message="message"/>
    </div>
    <div class="down">
      <message-send/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Message, User } from "../scripts/sdk/Interfaces"
import MessageComp from './MessageComp.vue'
import MessageSend from './MessageSend.vue'

@Component({
  components: {
    MessageComp,
    MessageSend
  }
})
export default class MessageColumn extends Vue {
  private messages: Message[] = [
    {
      uuid: "1",
      content: "Hallo",
      dateTime: "123713",
      authorID: "asd"
    },
    {
      uuid: "2",
      content: "Guten Tag! Ich wollte mal fragen warum die Sachen die ich hier programmiert habe eigentlich so gut aussehen?",
      dateTime: "123713",
      authorID: "asd"
    }
  ]
}
</script>

<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  display: flexbox;
  height: 100%;
}
.down {
  display: flexbox;
}
</style>