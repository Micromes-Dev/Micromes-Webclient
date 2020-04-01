<template>
  <div class="container tableContainer">
    <ChannelColumn class="column" />
    <MessageColumn class="column" />
    <UserColumn class="column" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Guild } from "../scripts/sdk/Interfaces";
import ChannelColumn from "@/components/ChannelColumn.vue";
import MessageColumn from "@/components/MessageColumn.vue";
import UserColumn from "@/components/UserColumn.vue";

@Component({
  components: {
    Guild,
    ChannelColumn,
    MessageColumn,
    UserColumn
  }
})
export default class GuildComp extends Vue {
  @Prop({ required: false }) guild: Guild;
}
</script>

<style scoped>

.tableContainer {
  display: flex;
  width: 100%;
  grid-template-columns: 20% auto 10%;
  grid-template-rows: auto;
}

.column {
  display: flexbox;
}
</style>