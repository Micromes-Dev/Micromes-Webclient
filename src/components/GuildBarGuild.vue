<template>
  <a class="guildContainer">
    <img class="guildImg" :src="pictureURL" :alt="name" sizes="30x30" @click="redirect"/>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components:{
    
  }
})
export default class GuildBarGuild extends Vue {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) pictureURL: string;
  @Prop({ required: true }) uuid: string;

  redirect(){
    window.location.href = "/#/" + this.uuid + "/0";
  }
}
</script>

<style scoped>
.guildContainer {
  display: inline-block;
  margin: 10px;
}

.guildImg {
  margin: auto;
  width: 50px;
  border-radius: 50%;
}
</style>