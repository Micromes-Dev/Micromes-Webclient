import { User, Status } from "./Interfaces"
import Vuex, { Store } from 'vuex'
import MessengerCache from "./MessengerCache"

const axios = require("axios")

import { GraphQLClient } from 'graphql-request'
import { messageForChannelQuerie, getMeQuerie } from '@/queries/queries'


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

  getBackendCurrentUser(callback : (response: Response) => void) {
    this.graphQLClient?.request(getMeQuerie)
    .then(data => {
      callback(data)
    })
    .catch((error) => console.log(error))
  }

  getMessagesForChannel(channelID: string, callback : (data: any) => void) {
    this.graphQLClient?.request(messageForChannelQuerie, { id: "16" })
    .then(callback)
    .catch((error) => console.log(error))
  }

}