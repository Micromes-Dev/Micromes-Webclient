<template>
  <div class="container">
    hallo
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {Message } from "../scripts/sdk/Interfaces"

@Component({
  components:{
    Message
  }
})
export default class MessageColumn extends Vue {
}
</script>

<style scoped>

.container{
  width: 100%;
  background-color: darkseagreen;
}
</style>