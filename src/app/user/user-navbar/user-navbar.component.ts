import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CognitoService } from '../../core/services/cognito/cognito.service';
import { UsersService } from 'src/app/core/services/users/users.service';


@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {


  constructor(private router: Router, public cognitoService: CognitoService, public userService: UsersService) { }
  public isCollapsed = true;

  cognitoUsername: string;
  user: any;
  userRole: any;

  ngOnInit() {
    this.cognitoService.getCurrentAuthUser().then(authUser => {
      this.cognitoUsername = authUser.username;
      this.userService.getUserByUsername(this.cognitoUsername)
        .subscribe (user => {
          this.user = user;
          console.log(this.user);
          this.userRole = this.user.roleId.name;
          console.log(this.userRole);
        }
          );
    });
  }



  onLogout() {
    this.cognitoService.amplifySignOut();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
