import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CognitoService } from '../services/cognito/cognito.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

username: String;
password: String;
email: String;
newPassword: String;


function getCodeFromUserInput(){
  return null;
}

function getInfoFromUserInput(){
  return null;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  disableSelect = new FormControl(false);

  constructor(public dialog: MatDialog, public cognitoService: CognitoService) { }

  cognitoSignIn(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;
    const newPassword = form.value.newPassword;
    this.cognitoService.cognitoSignIn(username, password, newPassword);
  }

}
