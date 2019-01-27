import { Component, OnInit } from '@angular/core';

import { Event } from '../../shared/models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];

  constructor() { }

  ngOnInit() {
  }

}
