import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})
export class UserComponent implements OnInit {

  users: any = null;

  constructor() { }

  ngOnInit() {
  }

}
