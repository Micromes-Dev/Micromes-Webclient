<template>
  <div class="guildbar panel verticalFullWindowSize scrollable noScrollbar">
    <ul>
      <li>
        <GuildBarGuild
          name="test"
          pictureURL="https://yt3.ggpht.com/a-/AOh14GgRrZ6dNfb8p4jwooTDk5sQz55Rn6HwHI3RkhcLmBs=s88-c-k-c0xffffffff-no-rj-mo"
          uuid="kjköljhgL"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GuildBarGuild from "@/components/GuildBarGuild.vue";

@Component({
  components: {
    GuildBarGuild
  }
})
export default class GuildBar extends Vue {
  private vue: any = Vue;

  mounted() {
    console.log("Guild id");
    console.log(this.$route.params);
    if (this.$route.params.guildId != null)
      console.log(this.$route.params.guildId);
  }
}
</script>

<style scoped>
.guildbar.panel {
  height: 100vh;
  background-color: #202225;
  display: inline-block;
  text-decoration: none;
}

.scrollable {
  overflow-y: scroll;
  overflow-x: hidden;
  line-height: 3em;
}

.noScrollbar {
  box-sizing: content-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.noScrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>