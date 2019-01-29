import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class CognitoService {

  constructor() { }

  getCodeFromUserInput() {
    return null;
  }

  getInfoFromUserInput() {
    return null;
  }

  async cognitoSignUp(username, password, email) {
    const user = await Auth.signUp({ username, password, attributes: { email } })
      .catch(err => console.log(err));
    console.log(user);
  }

  async cognitoConfirmSignUp(username, code) {
    const data = await Auth.confirmSignUp(username, code, { forceAliasCreation: true })
      .then(err => console.log(err));
  }

  cognitoResendSignUp(username) {
    Auth.resendSignUp(username)
      .then(data => console.log('Code resend successful'))
      .catch(err => console.log(err));
  }

  async cognitoSignIn(username, password, newPassword) {
    try {
      const user = await Auth.signIn(username, password);
      if (user.challengeName === 'SMS_MFA' ||
        user.challengerName === 'SOFTWARE_TOKEN_MFA') {

        const code = this.getCodeFromUserInput();

        const loggedUser = await Auth.confirmSignIn(user, code, user.challengeName);
      } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const { requiredAttributes } = user.challengeParam;

        const { username, email } = this.getInfoFromUserInput();
        const loggedUser = await Auth.completeNewPassword(user, newPassword, { email });
      } else if (user.challengeName === 'MFA_SETUP') {
        Auth.setupTOTP(user);
      } else {
        console.log(user);
      }
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {

      } else if (err.code === "PasswordResetRequiredException") {

      } else {
        console.log(err);
      }
    }

  }
}
