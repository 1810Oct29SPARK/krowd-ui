import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/user';
import { Event } from '../../shared/models/event';

@Component({
  selector: 'app-user-create-event',
  templateUrl: './user-create-event.component.html',
  styleUrls: ['./user-create-event.component.css']
})
export class UserCreateEventComponent implements OnInit {

  events: Event[] = [];

  constructor() { }

  ngOnInit() {
  }

  addEvent(event: Event) {
    
  }

}
