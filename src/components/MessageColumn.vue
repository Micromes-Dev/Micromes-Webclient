<template>
  <div class="container">
    hallo
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class MessageColumn extends Vue {
}
</script>

<style scoped>

.container{
  width: 100%;
  background-color: darkkhaki;
}
</style>