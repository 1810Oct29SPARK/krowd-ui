import { Component, OnInit } from '@angular/core';

import { Event } from '../../shared/models/event';
import { Comment } from '../../shared/models/comment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  comments: Comment[] = [];

  constructor() { }

  ngOnInit() {
  }

  addComment(comment: Comment) {
    //
  }

  getCommentById(id: number) {
  }

}
