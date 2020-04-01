<template>
  <div class="container table">
    <ChannelColumn/>
    <MessageColumn/>
    <UserColumn/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Guild } from "../scripts/sdk/Interfaces"
import ChannelColumn from "@/components/ChannelColumn.vue"
import MessageColumn from "@/components/MessageColumn.vue"
import UserColumn from "@/components/UserColumn.vue"

@Component({
  Guild,
  ChannelColumn,
  MessageColumn,
  UserColumn
})
export default class GuildComp extends Vue {
  @Prop({ required: true }) guild: Guild
}
</script>

<style scoped>
.container{
  display: inline-block;
}
</style>