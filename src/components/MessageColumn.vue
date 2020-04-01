<template>
  <div class="container dark padded">
    Messages
    <message-comp
      v-for="message in messages"
      v-bind:key="message.uuid"
      v-bind:message="message"/>
    <message-send/>
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
    }
  ]
}
</script>

<style scoped>

.container{
  width: 100%;
}
</style>