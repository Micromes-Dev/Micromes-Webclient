<template>
  <div id="app" class="content verticalFullWindowSize">
    <GuildBar class="column verticalFullWindowSize guildbar" />
    <GuildComp class="column verticalFullWindowSize" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { Route } from "vue-router"
import GuildBar from "./components/GuildBar.vue"
import GuildComp from "@/components/GuildComp.vue"
import { User } from "./scripts/sdk/Interfaces"
import BackendCommunicator from "./scripts/sdk/BackendCommunication"

const backendCom: BackendCommunicator = new BackendCommunicator()

@Component({
  components: {
    GuildBar,
    GuildComp
  }
})
export default class Messenger extends Vue {
  getCookie(name: string): string | undefined {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return undefined;
  }

  created() {
    //#region set variables
    var cookie: string | undefined = this.getCookie("micromesJWt");
    var encodedJWTData = cookie
      ? cookie.substring(cookie.indexOf(".") + 1, cookie.lastIndexOf("."))
      : "";
    var decodedJWTData = atob(encodedJWTData);
    this.$store.state.cache.decodedJWTData = decodedJWTData
    this.$store.state.cache.token = cookie
    //#endregion
    
    console.log(cookie);

    this.$store.state.cache.curUser = {
      name: "Tom",
      status: "Online",
      profilePictureLocation: "https://mtorials.de/stuff/universeicon0001.png"
    };
    this.$store.state.cache.addGuild({
      id: "2",
      channelIDs: ["1"],
      name: "Universum",
      pictureLocation: "https://mtorials.de/stuff/universeicon0001.png"
    });
    this.$store.state.cache.addGuild({
      id: "3",
      channelIDs: ["1", "2"],
      name: "Another Universe",
      pictureLocation: "https://mtorials.de/stuff/universeicon0001.png"
    });
    this.$store.state.cache.addChannel({
      name: "text",
      checksum: 1,
      id: "2",
      messageIDs: ["1", "2"]
    })
    this.$store.state.cache.addChannel({
      name: "hallo",
      checksum: 1,
      id: "1",
      messageIDs: ["1", "2"]
    })
    this.$store.state.cache.addMessage({
      id: "2",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ",
      dateTime: "123713",
      authorID: "1"
    })
    this.$store.state.cache.addMessage({
      id: "1",
      content: "I am very pretty",
      dateTime: "123713",
      authorID: "1"
    })

    backendCom.getBackendCurrentUser(this.$store.state.cache)
  }

  @Watch("$route", { immediate: true, deep: true })
  onURLChange(route: Route) {
    this.$store.state.cache.curGuild = this.$store.state.cache.getGuild(route.params.guildId)
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Comfortaa", cursive;
  color: white;
  text-decoration: none;
}

.container {
  background-color: #36393f;
}

.verticalFullWindowSize {
  height: 100vh;
}

input {
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 6px;
  margin: 5px;
}

.padded {
  padding: 10px;
}

.flex {
  display: flex;
}
.updown {
  flex-direction: column;
}
.leftright {
  flex-direction: row;
}
.flexbox {
  display: flexbox;
}
.fullheight {
  height: 100%;
}
.fullwidth {
  width: 100%;
}

.light {
  background-color: #00a7e1;
}
.dark {
  background-color: #00171f;
}
.middledark {
  background-color: #003459;
}
.cyan {
  background-color: #007ea7;
}
.white {
  background-color: white;
}

.pic {
  height: 40px;
  width: 40px;
  border-radius: 13px;
}

.marg {
  margin: 7px;
}

.radius {
  border-radius: 13px;
}
</style>

<style scoped>
.content {
  display: flex;
  color: white;
  width: 100%;
  grid-template-columns: auto auto;
  background-color: #00171f;
}

.column {
  display: flexbox;
}
</style>