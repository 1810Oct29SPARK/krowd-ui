import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CognitoService } from '../../core/services/cognito/cognito.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {


  constructor(private router: Router, public cognitoService: CognitoService) { }
  public isCollapsed = true;

  cognitoUsername: string;

  ngOnInit() {
    this.cognitoService.getCurrentAuthUser().then(authUser => {
      this.cognitoUsername = authUser.username;
    });
  }

  onLogout() {
    this.cognitoService.amplifySignOut();
    this.router.navigate(['/']);
  }

}
