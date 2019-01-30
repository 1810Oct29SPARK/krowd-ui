import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})

export class UserProfileComponent implements OnInit {


  public show_info: Boolean = false;
  public info_button_text: any = 'Show Profile Info';
  public show_events: Boolean = false;
  public event_button_text: any = 'Show My Events';
  public show_comments: Boolean = false;
  public comment_button_text: any = 'Show My Comments';
  closeResult: string;
  response: any = null;
  attendingEvents = [];
  eventList2 = [];

  constructor(public dialog: MatDialog, private modalService: NgbModal, private eventService: EventsService) { }

  ngOnInit() {
    this.getEventsByUserId();
  }

  toggleProfile() {
    this.show_info = !this.show_info;

    if (this.show_info) {
      this.info_button_text = 'Hide Profile Info';
    } else {
      this.info_button_text = 'Show Profile Info';
    }

  }

  toggleEvents() {
    this.show_events = !this.show_events;

    if (this.show_events) {
      this.event_button_text = 'Hide My Events';
    } else {
      this.event_button_text = 'Show My Events';
    }
  }

  toggleComments() {
    this.show_comments = !this.show_comments;

    if (this.show_comments) {
      this.comment_button_text = 'Hide My Comments';
    } else {
      this.comment_button_text = 'Show My Comments';
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getEventsByUserId() {
    let userId: number = parseInt(sessionStorage.getItem('id'), 10);
    this.eventService.getEventsByUserId(userId)
      .subscribe(
        (events) => {
          for (let event of events) {
            this.attendingEvents.push(event);
            if (event.eventPhotoID === null) {
              event.eventPhotoID = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
            }
          }
        },
        (error) => console.log(error)
      );
    return this.attendingEvents;
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe(
        (events) => {
          for (let event of events) {
            this.eventList2.push(event);
            if (event.eventPhotoID === null) {
              event.eventPhotoID = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
            }
          }
        },
        (error) => console.log(error)
      );
    return this.eventList2;
  }

}
