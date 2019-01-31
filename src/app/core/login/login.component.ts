import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CognitoService } from '../services/cognito/cognito.service';
import { UsersService } from '../services/users/users.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  disableSelect = new FormControl(false);

  constructor(
    public dialog: MatDialog,
    public cognitoService: CognitoService,
    public userService: UsersService,
    public router: Router
  ) { }

  cognitoSignIn(form: NgForm) {
    const username: string = form.value.username;
    const password: string = form.value.password;
    const newPassword: string = form.value.newPassword;
    this.cognitoService.cognitoSignIn(username, password, newPassword);
  }

}
