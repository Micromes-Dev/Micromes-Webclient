import { User, Status } from "./Interfaces"
import Vuex, { Store } from 'vuex'
import MessengerCache from "./MessengerCache"

const axios = require("axios")

function getCookie(name: string): string | undefined {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return undefined;
}

export default class BackendCommunicator {

  setAuthorizationHeader(token: string) {
    console.log("Token is now " + token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  sendGraphlQLQuery(query: string): Promise<Response> {
    return axios.post('/api', `{"operationName":null,"variables":{},"query":"${query.replace(",", "\n").replace(/(\r\n|\n|\r)/gm, "")}"}`, {})
  }

  getBackendCurrentUser(callback : (response: Response) => void) {
    this.sendGraphlQLQuery(
      `query{
        me {
          name,
          profilePictureLocation,
          id,
          status
        }
      }`)
      .then(callback)
      .catch((error: Error) => {
          console.log(error)
      })
  }

  getMessagesForChannel(channelID: string, callback : (response: Response) => void) {
    this.sendGraphlQLQuery(`query{
      messagesForChannel(channelID: '${channelID}') {
        id,
        content,
        authorID
      }
    }`)
    .then(callback)
    .catch((error) => console.log(error))
  }

}