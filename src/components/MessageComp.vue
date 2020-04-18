<template>
  <div class="padded msg">
    <div class="left">
      <img class="pic" v-bind:src="user.profilePictureLocation"/>
    </div>
    <div class="right">
      <a class="tiny"><i>{{ user.name }}, {{ message.dateTime }}</i></a><br/>
      <hr class="seperator"/>
      {{ message.content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Message, User } from '../scripts/sdk/Interfaces'

@Component
export default class MessageComp extends Vue {
  @Prop({ required: true }) private message: Message
  private user : User = this.$store.state.users.filter((user: User) => user.id == this.message.authorID)[0]
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