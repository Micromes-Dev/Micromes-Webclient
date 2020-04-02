<template>
  <div class="sender flex leftright">
    <input type="text" class="cyan text flexbox fullwidth"/>
    <input type="submit" class="cyan button flexbox" value="send"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class MessageSend extends Vue {}
</script>