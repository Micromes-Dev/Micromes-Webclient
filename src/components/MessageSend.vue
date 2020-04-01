<template>
  <div class="padded cyan">
    <input type="text" class="dark area"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class MessageSend extends Vue {

}

</script>

<style scoped>
.tiny {
  font-size: 0.75rem;
}
.area {
    border: none;
    outline: none;
}
</style>