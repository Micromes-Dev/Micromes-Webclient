import { User } from "./Interfaces"

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

  constructor(jwtToken: string) {
    this.jwtToken = jwtToken
    this.setAuthorizationHeader()
  }

  setAuthorizationHeader() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.jwtToken}`
  }

  sendGraphlQLQuery(query: string): Promise<Response>{
    return axios.post('/api', `{"query": "${query}"}`)
  }

  getBackendCurrentUser(): User {

  }
}