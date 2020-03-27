<template>
  <div class="guildContainer">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Guild extends Vue {
  text: string = ""
  pictureURL: string = ""
}
</script>

<style scoped>

</style>