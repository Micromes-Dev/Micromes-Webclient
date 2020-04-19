import { User, Status, Channel, Guild, ExtendedGuild, GraphQLGuild } from "./Interfaces"
import Vuex, { Store } from 'vuex'

const axios = require("axios")

import { GraphQLClient } from 'graphql-request'
import { messageForChannelQuerie, getMeQuerie, privateChannelsQuerie, guildsQuerie, guildByIdQuerie } from '@/queries/queries'
import { sendMessages, createGuildChannel } from '@/queries/mutations'


export default class BackendCommunicator {

  endpoint: string = "/api"

  graphQLClient : null | GraphQLClient = null

  initialize(token: string) {
    console.log("Token is now " + token)
    this.graphQLClient = new GraphQLClient(this.endpoint, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
  }

  getBasicGuilds(callback: (guilds: Array<GraphQLGuild>) => void){
    this.graphQLClient?.request(guildsQuerie)
    .then(data => {
      callback(data.guilds)
    })
    .catch((error) => console.log(error))
  }

  getCurrentUser(callback : (response: Response) => void) {
    this.graphQLClient?.request(getMeQuerie)
    .then(data => {
      callback(data)
    })
    .catch((error) => console.log(error))
  }

  getMessagesForChannel(channelID: string, callback : (data: any) => void) {
    this.graphQLClient?.request(messageForChannelQuerie, { id: channelID })
    .then(callback)
    .catch((error) => console.log(error))
  }

  getPrivateChannels(callback : (data: any) => void){
    this.graphQLClient?.request(privateChannelsQuerie, {})
    .then(callback)
    .catch((error) => console.log(error))
  }

  sendMessage(content: string, channelID: string){
    this.graphQLClient?.request(sendMessages, {
      channelID,
      content
    })
    .catch((error) => console.log(error))
  }

  createGuildChannel(name: string, guild: string){
    this.graphQLClient?.request(createGuildChannel, {
      guild,
      name
    })
    .catch((error) => console.log(error))
  }
}