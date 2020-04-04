<template>
  <div class="flex leftright dark padded me">
    <img class="left pic flexbox" :src="$store.state.me.profilePictureLocation"/>
    <a class="flexbox text">{{$store.state.me.name}}</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class MeComp extends Vue {
}
</script>

<style scoped>
.left {
    margin-right: 10px;
}
.me {
    border-radius: 10px;
}
.text {
    line-height: 40px;
}
</style>