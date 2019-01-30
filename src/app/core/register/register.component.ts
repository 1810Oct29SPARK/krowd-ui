import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
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

  constructor(
    public dialog: MatDialog,
    public cognitoService: CognitoService,
    public userService: UsersService,
    public router: Router
  ) { }

  cognitoSignUp(form: NgForm) {
    const firstname: string = form.value.firstname;
    const lastname: string = form.value.lastname;
    const username: string = form.value.username;
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.cognitoService.cognitoSignUp(username, email, password, firstname, lastname);
    this.router.navigate(['/landing/confirm']);
  }

  ngOnInit() {

  }

  makeRequest() {
    this.userService.getUserByUsername('BoPeep').subscribe((data) => {
      console.log(data);
    });
  }

}
