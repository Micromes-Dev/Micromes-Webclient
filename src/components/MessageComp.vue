<template>
  <div class="padded msg">
    <div class="left">
      <img class="pic" v-bind:src="getPictureLocationForID(message.authorID)"/>
    </div>
    <div class="right">
      <a class="tiny"><i>{{ getUserNameForID(message.authorID) }}, {{ message.dateTime }}</i></a><br/>
      <hr class="seperator"/>
      {{ message.content }}
    </div>
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

  getPictureLocationForID(id: String) : string {
    return "http://mtorials.de/logo.png"
  }
}

</script>

<style scoped>
.left {
  display: flexbox;
  margin-right: 10px;
  padding-top: 2px;
}
.right {
  width: 100%;
  display: flexbox;
}
.msg {
  display: flex;
  flex-direction: row;
}
.tiny {
  font-size: 0.75rem;
}
.seperator {
  margin-bottom: 4px;
}
</style>