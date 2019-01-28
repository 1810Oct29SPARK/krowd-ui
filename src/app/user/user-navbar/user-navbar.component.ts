import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  public isCollapsed = true;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.router.navigate(['/']);
  }

}
