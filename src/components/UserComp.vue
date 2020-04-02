<template>
  <div class="flex leftright dark user">
    <img class="left pic flexbox" :src="user.profilePictureLocation"/>
    <div class="flexbox text">
        <a>{{ user.name }}</a><br/>
        <a class="tiny">{{ status }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { User } from '../scripts/sdk/Interfaces'

@Component
export default class UserComp extends Vue {
    @Prop({ required: true }) private user : User
    private status : string = this.user.status.toLocaleString()
}
</script>

<style scoped>
.left {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.tiny {
    font-size: 0.6rem;
}
.user {
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 10px;
}
.text {
    line-height: 20px;
}
</style>