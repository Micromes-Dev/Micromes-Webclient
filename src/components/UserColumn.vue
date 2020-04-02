<template>
  <div class="middledark padded updown flex">
    <div class="flexbox fullheight">
      <user-comp v-for="user in users"
        v-bind:key="user.uuid"
        v-bind:user="user"/>
    </div>
    <div class="flexbox">
      <me/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Me from './MeComp.vue'
import UserComp from './UserComp.vue'
import { User, Status } from '../scripts/sdk/Interfaces'

@Component({
  components:{
    Me,
    UserComp
  }
})
export default class UserColumn extends Vue {
  private users: User[] = [
    {
      uuid: "1",
      status: Status.ONLINE,
      name: "Universum",
      profilePictureLocation: "https://mtorials.de/stuff/universeicon0001.png"
    },
    {
      uuid: "2",
      status: Status.ONLINE,
      name: "berl",
      profilePictureLocation: "http://b-erler.de/pic/berl.jpg"
    }
  ]
}
</script>