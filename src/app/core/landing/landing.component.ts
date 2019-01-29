import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('up', style({ transform: 'translateY(-150%)' })),
      state('down', style({ transform: 'translateY(0)' })),
      transition('* => *', animate(300))
    ]),
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(800)
      ])
    ]
    )
  ]
})
export class LandingComponent {

  @Input() position = 'down';

  // delare boolean values for the info and items on the profile page
  showLogin: boolean = false;
  showRegister: boolean = false;

  toggleLogin() {
    this.showLogin = true;
    this.showRegister = false;
    this.position = 'up';
  }

  toggleRegister() {
    this.showRegister = true;
    this.showLogin = false;
    this.position = 'up';
  }

  // Dialog is like a modal in bootstrap for Angular material
  constructor(public dialog: MatDialog) { }

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

// type PaneType = 'up' | 'down';
