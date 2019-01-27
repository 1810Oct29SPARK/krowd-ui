import { Component, OnInit } from '@angular/core';

import { Comment } from '../../shared/models/comment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  comments: Comment[] = [];

  constructor() { }

  ngOnInit() {
  }

  showModal() {
    console.log("modal works");
  }

}
