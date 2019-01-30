import { Component, OnInit } from '@angular/core';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public dialog: MatDialog, public cognitoService: CognitoService, public userService: UsersService) { }

  cognitoSignUp(form: NgForm) {
    const username: string = form.value.username;
    const email: string = form.value.email;
    const password: string = form.value.password;
    const firstname: string = form.value.firstname;
    const lastname: string = form.value.lastname;
    this.cognitoService.cognitoSignUp(username, email, password)
    // .then((data) => {
    //   this.userService.registerUser(username, email, firstname, lastname);
    // }).catch(error => {
    //   console.log(error);
    // })
  }

  ngOnInit() {
    
  }

  makeRequest() {
    this.userService.getUserByUsername('BoPeep').subscribe((data) => {
      console.log(data);
    });
  }

}
