<template>
  <a>
    <div class="flex leftright">
      <div class="indicator white" v-if="activated"/>
      <div class="miniindic white" v-if="hover && !activated"/>
      <img class="pic marg" :src="guild.pictureLocation" :alt="guild.name" @click="redirect" @mouseover="hover = true" @mouseleave="hover = false"/>
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
  private hover: boolean = false

  redirect(){
    window.location.href = "/#/" + this.guild.id + "/0";
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.activated = this.$route.params.guildId == this.guild.id
  }
}
</script>

<style scoped>
.indicator {
  height: 30px;
  width: 5px;
  margin: auto;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.miniindic {
  height: 18px;
  width: 5px;
  margin: auto;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>