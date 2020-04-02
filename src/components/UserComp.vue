<template>
  <div class="flex leftright dark user">
    <img class="left pic flexbox" :src="user.profilePictureLocation"/>
    <a class="flexbox text">{{ user.name }}</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { User } from '../scripts/sdk/Interfaces'

@Component
export default class UserComp extends Vue {
    @Prop({ required: true }) private user : User
}
</script>

<style scoped>
.left {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.user {
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 10px;
}
.text {
    line-height: 40px;
}
</style>