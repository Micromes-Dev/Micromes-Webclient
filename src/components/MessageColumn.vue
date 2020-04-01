<template>
  <div class="container dark">
    Messages
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Message } from "../scripts/sdk/Interfaces"

@Component
export default class MessageColumn extends Vue {
}
</script>

<style scoped>

.container{
  width: 100%;
}
</style>