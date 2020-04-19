<template>
  <div class="middledark padded updown flex">
    <div class="flexbox fullheight">
      <user-comp v-for="user in this.$store.state.currentGuild.users"
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
}
</script>