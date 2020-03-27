import { Component, Vue } from 'vue-property-decorator';
const axios = require('axios');

export default class Authenticator extends Vue {

  id_token: string = "";
  loggedIn: boolean = false

  authorizationHeader(id_token: String) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${id_token}`;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
    axios.post("http://micromes.net:8080/api", { "action": "dashboard" }, {
    })
      .then(function (response : Response) {
        console.log(response);
      })
      .catch(function (error : Error) {
        console.log(error);
      })
  }

  //#region google signin
  signInSuccess(googleUser : any) {
    this.loggedIn = true;
    this.id_token = googleUser.getAuthResponse().id_token;
    sessionStorage.setItem('id_token', this.id_token);
    this.authorizationHeader(this.id_token);
    console.log(googleUser);
  }

  onSignInError(error : Error) {
    console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
  }

  serverSignout() {

  }
  //#endregion

}