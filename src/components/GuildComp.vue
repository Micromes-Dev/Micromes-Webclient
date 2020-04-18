<template>
  <div class="container tableContainer">
    <ChannelColumn class="column channels"/>
    <MessageColumn class="column messages"/>
    <UserColumn class="column users" />
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
  display: flex;
  width: 100%;
}

.column {
  display: flexbox;
}

.column.channels{
  width: auto;
}

.column.messages{
  width: 100%;
}

.column.users{
  width: auto;
}
</style>