<template>
  <a>
    <div class="flex leftright">
      <div class="indicator cyan" v-if="activated"/>
      <img class="pic picmarg" :src="guild.pictureLocation" :alt="guild.name" @click="redirect"/>
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Guild } from '../scripts/sdk/Interfaces';

@Component
export default class GuildBarComp extends Vue {
  @Prop({ required: true }) private guild: Guild

  private activated: boolean = false

  redirect(){
    window.location.href = "/#/" + this.guild.uuid + "/0";
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.activated = this.$route.params.guildId == this.guild.uuid
  }
}
</script>

<style scoped>
.picmarg {
  margin: 5px;
}
.indicator {
  height: 30px;
  width: 7px;
  margin: auto;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>