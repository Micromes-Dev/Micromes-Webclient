<template>
  <div class="container">
    <ChannelColumn/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ChannelColumn from './ChannelColumn.vue'

@Component({
  components: {
    ChannelColumn
  }
})
export default class GuildComp extends Vue {
}
</script>

<style scoped>
.container{
  display: inline-block;
}
</style>