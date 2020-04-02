<template>
  <div class="flex leftright dark padded me">
    <img class="left pic flexbox" src="http://mtorials.de/logo.png"/>
    <a class="flexbox text">M'Torials</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class UserColumn extends Vue {
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