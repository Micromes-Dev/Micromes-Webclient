import Vue from 'vue'
import Vuex from 'vuex'
import Cache from '../scripts/sdk/MessengerCache';
import { Message } from '@/scripts/sdk/Interfaces';

import { MutationTree } from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cache: new Cache(),
    messagesByChannel: new Map<string, Array<Message>>(),
    checksumForChannel: new Map<string, number>()
  },
  mutations: {
    saveMessagesForChannel(state: any, payload : { channelID: string, messages: Array<Message> }) {
      state.messagesByChannel.set(payload.channelID, payload.messages)
    }
  },
  actions: {
  },
  getters: {
    getMessagesForChannel(channelID: string) : Array<Message> {
      return state.messagesByChannel.get(channelID)
    }
  }
})
