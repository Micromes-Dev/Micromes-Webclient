<template>
  <div class="container tableContainer">
    <ChannelColumn class="column" />
    <MessageColumn class="column" />
    <UserColumn class="column" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import ChannelColumn from './ChannelColumn.vue'
import MessageColumn from './MessageColumn.vue'
import UserColumn from './UserColumn.vue'
import { Guild } from '@/scripts/sdk/Interfaces';

@Component({
  components: {
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
  width: 100%;
  grid-template-columns: 20% auto 10%;
  grid-template-rows: auto;
}

.column {
  display: block;
}
</style>