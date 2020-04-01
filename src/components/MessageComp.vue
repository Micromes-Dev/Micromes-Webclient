<template>
  <div class="padded">
    <a class="tiny"><i>{{ getUserNameForID(message.authorID) }}, {{ message.dateTime }}</i></a><br/>
    {{ message.content }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Message } from '../scripts/sdk/Interfaces'

@Component
export default class MessageComp extends Vue {
  @Prop({ required: true }) private message: Message

  getUserNameForID(id: string) : string {
    return "matti"
  }
}

</script>

<style scoped>
.tiny {
  font-size: 0.75rem;
}
</style>