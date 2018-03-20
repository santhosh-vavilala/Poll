import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import * as auth0 from 'auth0-js';
// import { NavController } from 'ionic-angular';
// import { HomeComponent } from '../home/home.component';
@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'E5A6f1g6jDVA32gVB2tYKnyOvBl4vCWY',
    domain: 'traveldairy.auth0.com',
    responseType: 'token id_token',
    audience: 'https://traveldairy.auth0.com/userinfo',
    redirectUri: 'http://localhost:8100',
    scope: 'openid'
  });

  constructor() {}

  public login(): void {
    this.auth0.authorize();
  }

  // public handleAuthentication(): void {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.setSession(authResult);
  //       //this.navCtrl.push(HomeComponent);
  //     } else if (err) {
  //       //this.navCtrl.push(HomeComponent);
  //       console.log(err);
  //       alert(`Error: ${err.error}. Check the console for further details.`);
  //     }
  //   });
  // }

  public setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    // this.navCtrl.push(HomeComponent);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
