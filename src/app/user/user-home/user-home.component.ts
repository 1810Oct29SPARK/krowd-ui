import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from 'src/app/shared/models/event';
import { Comment } from '../../shared/models/comment';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  comments: Comment[] = [];

  eventList = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.getAllEvents();
  }

  showModal() {
    console.log('modal works');
  }

  // getAllEvents() {
  //   this.eventsService.getAllEvents()
  //     .subscribe(
  //       (events: any) => {
  //         for (const event of events) {
  //           this.eventList.push(event);
  //           if (event.photoUrl === null) {
  //             event.photoUrl = `http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png`;
  //           }
  //         }
  //       },
  //       (error) => console.log('user-homeComponentError: getAllEvents')
  //     );
  //   return this.eventList;
  // }


}
