import { User, Status } from "./Interfaces"
import Vuex, { Store } from 'vuex'
import MessengerCache from "./MessengerCache"
import { Field, Int, ObjectType } from "type-graphql"

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
  jwtToken: string = ""

  setAuthorizationHeader() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.jwtToken}`
  }

  sendGraphlQLQuery(query: string): Promise<Response> {
    return axios.post('/api', `{"operationName":null,"variables":{},"query":"${query.replace(",", "\n").replace(/(\r\n|\n|\r)/gm, "")}"}`, {})
  }

  getBackendCurrentUser(store: any) {
    this.jwtToken = store.state.token
    this.setAuthorizationHeader()

    this.sendGraphlQLQuery(
      `query{
        me
        {
          name,
          profilePictureLocation,
          id,
          status
        }
      }`).then(function (response: Response) {
        console.log(response)

        var user: User = {
          name: "",
          id: "",
          profilePictureLocation: "",
          status: Status.OFFLINE
        }
        store.state.curUser = user
      }).catch(function(error: Error){

      })

  }
}