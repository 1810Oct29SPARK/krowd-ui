import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component'
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  // delare boolean values for the info and items on the profile page
    showLogin: boolean = true;
    showRegister: boolean = false;

  toggleLogin() {
    this.showLogin = true;
    this.showRegister = false;
  }

  toggleRegister() {
    this.showRegister = true;
    this.showLogin = false;
  }

  // Dialog is like a modal in bootstrap for Angular material
  constructor(public dialog: MatDialog) {}

  // When the button is clicked on the landing.html, it will run this fuction which uses .open to create a dialog,
  // It will find the LoginComponent and open up its contents
  Login() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

  // When the button is clicked on the landing.html, it will run this fuction which uses .open to create a dialog,
  // It will find the LoginComponent and open up its contents
  Register() {
    const dialogRef = this.dialog.open(RegisterComponent);
  }
}
