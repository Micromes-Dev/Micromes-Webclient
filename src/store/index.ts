import Vue from 'vue'
import Vuex from 'vuex'
import Cache from '../scripts/sdk/MessengerCache';
import { Message } from '@/scripts/sdk/Interfaces';
import BackendCommunicator from '@/scripts/sdk/BackendCommunication';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cache: new Cache(),
    be: new BackendCommunicator(),
    messagesByChannel: new Map<string, Array<Message>>(),
    checksumByChannel: new Map<string, number>(),
    me: undefined
  },
  mutations: {
    saveMessagesForChannel(state: any, payload : { channelID: string, messages: Array<Message> }) {
      state.messagesByChannel.set(payload.channelID, payload.messages)
    }
  },
  actions: {
    setAuthHeader(context, token: string) {
      this.state.be.setAuthorizationHeader(token)
    },
    fetchMessagesForChannel(context, channelID: string) {
      this.state.be.getMessagesForChannel(channelID, (response: Response) => {
        console.log(response)
        let msgs : Array<Message> = []
        context.commit('saveMessagesForChannel', {
          channelID: channelID,
          messages: msgs
        })
      })
    }
  }
})
