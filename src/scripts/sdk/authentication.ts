import { Component, Vue } from 'vue-property-decorator';
//import { OAuth2Client }  from 'google-auth-library';
const axios = require('axios')
const VueSessionStorage = require("vue-sessionstorage")
const GAuth = require('vue-google-oauth2-gapi')
//const http = require('http');
//const url = require('url');
//const open = require('open');

const keys = require('./oauth2.keys.json');

export default class Authenticator extends Vue {
  clientID: string = ""
  id_token: string = "";
  loggedIn: boolean = false
  oAuth2Client: any
  vue: any = Vue

  authorizationHeader(id_token: String) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${id_token}`;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
    axios.post("http://micromes.net:8080/api", { "action": "dashboard" }, {
    })
      .then(function (response: Response) {
        console.log(response);
      })
      .catch(function (error: Error) {
        console.log(error);
      })
  }

  test() {
    this.vue.$gAuth.signIn(function (user: any) {
      //on success do something
      console.log('user', user)
    }, function (error: any) {
      //on fail do something
    })
  }


  //#region google-oauth-library
  /*
  async authenticate() {
    this.oAuth2Client = await this.getAuthenticatedClient();
    // Make a simple request to the People API using our pre-authenticated client. The `request()` method
    // takes an GaxiosOptions object.  Visit https://github.com/JustinBeckwith/gaxios.
    const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
    const res = await this.oAuth2Client.request({ url });
    console.log(res.data);

    // After acquiring an access_token, you may want to check on the audience, expiration,
    // or original scopes requested.  You can do that with the `getTokenInfo` method.
    const tokenInfo = await this.oAuth2Client.getTokenInfo(
      this.oAuth2Client.credentials.access_token
    );
    console.log(tokenInfo);
  }

  getAuthenticatedClient() {
    return new Promise((resolve, reject) => {
      // create an oAuth client to authorize the API call.  Secrets are kept in a `keys.json` file,
      // which should be downloaded from the Google Developers Console.
      const oAuth2Client = new OAuth2Client(
        keys.web.client_id,
        keys.web.client_secret,
        keys.web.redirect_uris[0]
      );

      // Generate the url that will be used for the consent dialog.
      const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
      });

      // Open an http server to accept the oauth callback. In this simple example, the
      // only request to our webserver is to /oauth2callback?code=<code>
      const server = http
        .createServer(async (req: any, res: any) => {
          try {
            if (req.url.indexOf('/oauth2callback') > -1) {
              // acquire the code from the querystring, and close the web server.
              const qs = new url.URL(req.url, 'http://localhost:3000')
                .searchParams;
              const code = qs.get('code');
              console.log(`Code is ${code}`);
              res.end('Authentication successful! Please return to the console.');
              server.destroy();

              // Now that we have the code, use that to acquire tokens.
              const r = await oAuth2Client.getToken(code);
              // Make sure to set the credentials on the OAuth2 client.
              oAuth2Client.setCredentials(r.tokens);
              console.info('Tokens acquired.');
              resolve(oAuth2Client);
            }
          } catch (e) {
            reject(e);
          }
        })
      .listen(3000, () => {
        // open the browser to the authorize url to start the workflow
        open(authorizeUrl, { wait: false }).then(cp => cp.unref());
      });
    destroyer(server);
    });
  }*/
  //#endregion

  /*
  //#region google signin
  signInSuccess(googleUser: any) {
    this.loggedIn = true;
    this.id_token = googleUser.getAuthResponse().id_token;
    sessionStorage.setItem('id_token', this.id_token);
    this.authorizationHeader(this.id_token);
    console.log(googleUser);
  }

  onSignInError(error: Error) {
    console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
  }

  serverSignout() {

  }*/
  //#endregion

}