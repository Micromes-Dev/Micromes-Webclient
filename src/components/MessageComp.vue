<template>
  <div class="padded msg">
    <div class="left">
      <img class="pb" v-bind:src="getPictureLocationForID(message.authorID)"/>
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
}
.right {
  width: 100%;
  display: flexbox;
  padding-top: 7px;
}
.msg {
  display: flex;
  flex-direction: row;
}
.tiny {
  font-size: 0.75rem;
}
.seperator {
  margin-bottom: 5px;
}
.pb {
  width: 60px;
}
</style>