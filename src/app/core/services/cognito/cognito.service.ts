import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class CognitoService {

  constructor(public httpClient: HttpClient) { }

  getCodeFromUserInput(): any {
    return null;
  }

  getInfoFromUserInput(): any {
    return null;
  }

  // get the current authorized user from local storage
  getCurrentAuthUser(): any{
     return Auth.currentAuthenticatedUser()
      .then(data => { 
        return data })
      .catch(err => console.log(err));
  }

  // get the current session tokens from local storage
  getCurrentSessionTokens(): any{
    return Auth.currentSession()
      .then(data => {
        return data
      })
      .catch(err => console.log(err));
  }

  // send the access token to the server for session storage
  sendAccessToken(accessToken: string): any{
    this.httpClient.post('', accessToken);
  }

  async cognitoSignUp(username: string, password: string, email: string): Promise<void> {
    const user: any = await Auth.signUp({ username, password, attributes: { email } })
      .catch(err => console.log(err));
    console.log(user);
  }

  async cognitoConfirmSignUp(username: string, code: string): Promise<void> {
    const data: any = await Auth.confirmSignUp(username, code, { forceAliasCreation: true })
      .then(err => console.log(err));
  }

  cognitoResendSignUp(username: string): any {
    Auth.resendSignUp(username)
      .then(data => console.log('Code resend successful'))
      .catch(err => console.log(err));
  }

  /**Sign In function used to authenticate the user with AWS Cognito.
   * If the user has a challengeName, it will require the user to do another step.
   * This could be using a text/email for multi-factor authentication or changing their 
   * password because it needs to be updated.
   * Cognito sends back the user, idToken, accessToken, and refreshToken.
   * We send the username from the user and the accessToken to the server to use the username and store
   * the accessToken for verification purposes later on. 
  */
   async cognitoSignIn(username: string, password: string, newPassword: string): Promise<void> {
    try {
      const user: any = await Auth.signIn(username, password);
      if (user.challengeName === 'SMS_MFA' ||
        user.challengerName === 'SOFTWARE_TOKEN_MFA') {

        const code: any = this.getCodeFromUserInput();

        const loggedUser: any = await Auth.confirmSignIn(user, code, user.challengeName);
      } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const { requiredAttributes }: any = user.challengeParam;

        const { username, email }: any = this.getInfoFromUserInput();
        const loggedUser: any = await Auth.completeNewPassword(user, newPassword, { email });
      } else if (user.challengeName === 'MFA_SETUP') {
        Auth.setupTOTP(user);
      } else {
        this.getCurrentAuthUser().then(authUser => { 
          console.log(authUser.username);
        });
        this.getCurrentSessionTokens().then(tokens => {
          console.log(tokens.accessToken.jwtToken);
          this.sendAccessToken(tokens.accessToken.jwtToken);
        });
      }
    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {

      } else if (err.code === 'PasswordResetRequiredException') {

      } else {
        console.log(err);
      }
    }

  }

  amplifySignOut(){
    Auth.signOut()
      .catch(err => console.log(err));
  }
}
