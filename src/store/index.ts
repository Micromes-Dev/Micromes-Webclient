import Vue from 'vue'
import Vuex from 'vuex'
import { Message, User, Channel, Guild, Status, ExtendedGuild, GraphQLGuild, PrivateChannel } from '@/scripts/sdk/Interfaces';
import BackendCommunicator from '@/scripts/sdk/BackendCommunication';
import { messageForChannelQuerie } from '@/queries/queries';
import { GraphQLClient } from 'graphql-request';

Vue.use(Vuex)

interface State {
  messages: MessagePlus[]
  me: User
  be: BackendCommunicator
  guilds: Guild[]
  currentGuild: Guild
  users: Array<User>
  channelID: String
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
      iconLocation: "http://mtorials.de/logo.png"
    }],
    currentGuild: {
      id: "0",
      channels: [],
      name: "-",
      iconLocation: 'http://mtorials.de/logo.png'
    },
    users: new Array<User>(),
    channelID: "0"
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
    },
    setPrivateChannels(state: State, channels: Channel[]) {
      Vue.set(state.guilds.filter(g => g.id == "0")[0], 'channels', channels)
    },
    setGuilds(state: State, guilds: Array<Guild>){
      state.guilds = guilds
    },
    addUser(state: State, user: User){
      state.users.push(user)
    },
    setChannelID(state: State, channelID: String) {
      state.channelID = channelID
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
      this.state.be.getCurrentUser((response: any) => {
        let me : User = response.me
        context.commit('setMe', me)
      })
    },
    fetchGuilds(context){
      this.state.be.getBasicGuilds((guilds: GraphQLGuild[]) => {
        console.log(guilds)
        for (let i in guilds) {
          for (let j in guilds[i].users) {
            context.commit('addUser', guilds[i].users[j])
          }
        }
        context.commit('setGuilds', guilds as Guild[])
      })
    },
    fetchPrivateChannels(context) {
      this.state.be.getPrivateChannels((channels: PrivateChannel) => {
        context.commit('setPrivateChannels', channels)
      })
    }
  },
  getters: {
    currentMessages: (state: State) : Array<Message> => {
      let a: any = state.messages
      console.log(state.channelID)
      return a.filter((msg: MessagePlus) => msg.channelID == state.channelID)
    }
  }
})
