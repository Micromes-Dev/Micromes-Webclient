import Vue from 'vue'
import Vuex from 'vuex'
import { Message, User, Channel, Guild, Status } from '@/scripts/sdk/Interfaces';
import BackendCommunicator from '@/scripts/sdk/BackendCommunication';
import { messageForChannelQuerie } from '@/queries/queries';

Vue.use(Vuex)

interface State {
  messages: MessagePlus[]
  me: User
  be: BackendCommunicator
  guilds: Guild[]
  currentGuild: Guild
}

interface MessagePlus extends Message {
  channelID: string
}

export default new Vuex.Store({
  state: {
    be: new BackendCommunicator(),
    messages: [{
      id: "0",
      content: "nix",
      channelID: "16",
      dateTime: "21345",
      authorID: "1"
    }],
    me: {
      id: "0",
      name: "-",
      profilePictureLocation: "http://mtorials.de/logo.png",
      status: Status.ONLINE
    },
    guilds: [{
      id: "0",
      name: "Private Channels",
      channels: [{
        id: "0",
        name: "welcome",
        checksum: 1
      }],
      pictureLocation: "http://mtorials.de/logo.png"
    }],
    currentGuild: {
      id: "0",
      channels: [],
      name: "-",
      pictureLocation: 'http://mtorials.de/logo.png'
    }
  },
  mutations: {
    saveMessagesForChannel(state: State, messages: MessagePlus[]) {
      state.messages = messages
    },
    setMe(state: State, me: User) {
      state.me = me
    },
    setCurrentGuild(state: State, guild: Guild) {
      state.currentGuild = guild
    }
  },
  actions: {
    initialize(context, token: string) {
      this.state.be.initialize(token)
    },
    fetchMessagesForChannel(context, channelID: string) {
      this.state.be.getMessagesForChannel(channelID, (response: any) => {
        let msgs : any[] = response.messagesForChannel
        msgs.forEach(msg => msg.channelID = channelID)
        let msgsp : MessagePlus[] = msgs
        context.commit('saveMessagesForChannel', msgsp)
      })
    },
    fetchCurrentUser(context) {
      this.state.be.getBackendCurrentUser((response: any) => {
        let me : User = response.me
        context.commit('setMe', me)
      })
    }
  },
  getters: {
    currentMessages: (state: State) : Array<Message> => {
      let a: any = state.messages
      console.log(a)
      return a.filter(msg => msg.channelID == "16")
    }
  }
})
