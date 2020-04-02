<template>
  <div class="sender">
    <input type="text" class="cyan text"/>
    <input type="submit" class="cyan button" value="send"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class MessageSend extends Vue {

}

</script>

<style scoped>

.sender {
  display: flex;
  flex-direction: row;
}
.text {
  width: 100%;
  display: flexbox;
}

.button {
  display: flexbox;
}
</style>