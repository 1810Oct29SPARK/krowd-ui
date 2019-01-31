import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  toggle = false;
  response: any = null;
  closeResult: string;
  flaggedEvents = [];
  flaggedComments = [];
  eventId: any = 1;
  flagNewEvent: any;
  flagNewComment: any;
  commentToKill: any;
  eventToKill: any;

  constructor(public dialog: MatDialog, private http: HttpClient, private modalService: NgbModal, private eventService: EventsService) { }

  // (1) array with elements of type Event

  // (2) send a request to get all events that are flagged

  open(content: any) {
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

  ngOnInit() {
    this.getAllFlaggedEvents();
    this.getAllFlaggedComments();
  }


  getAllFlaggedEvents() {
    this.eventService.getAllFlaggedEvents()
      .subscribe(
        (events) => {
          console.log(events);
          for (let event of events) {
            this.flaggedEvents.push(event);
            if (event.picture === null) {
              event.picture = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
            }
          }
        },
        (error) => console.log(error)
      );
    return this.flaggedEvents;
  }

  getAllFlaggedComments() {
    this.eventService.getFlaggedComments()
      .subscribe(
        (comments) => {
          console.log(comments);
          for (let comment of comments) {
            this.flaggedComments.push(comment);
          }
        },
        (error) => console.log(error)
      );
    return this.flaggedEvents;
  }

  // dismissFlaggedEvent(flagged: Event) {
  //   flagged.flag = 0;
  //   this.modalService.dismissAll();
  //   console.log("pressed dismiss before");
  //   this.eventService.updateEvent(flagged);
  //   console.log("pressed dismiss after");
  // }
  // consoleFunc(flagged){console.log(flagged);}

  unflagEvent(value) {
    let index = this.flaggedEvents.indexOf(value);
    this.flagNewEvent = value;
    this.flagNewEvent.flag = 0;
    console.log(value);
    this.http.put(HttpService.baseUrl + 'event/update', {
      'eventID': this.flagNewEvent.id,
      'eventName': this.flagNewEvent.name,
      'eventCategory': this.flagNewEvent.categoryId.id,
      'eventDate': this.flagNewEvent.date,
      'eventAddress': this.flagNewEvent.address.streetAddress,
      'eventApartment': JSON.stringify(this.flagNewEvent.address.apartment),
      'eventCity': this.flagNewEvent.address.city,
      'eventState': this.flagNewEvent.address.state,
      'eventZip': this.flagNewEvent.address.zip,
      'eventDescription': this.flagNewEvent.description,
      'eventFlag': this.flagNewEvent.flag,
      'userID': this.flagNewEvent.userId.id,
      'eventPhotoID': this.flagNewEvent.picture
    }).subscribe((result) => {
    });
    this.flaggedEvents.splice(index, 1);
    // this.eventService.getAllFlaggedEvents();
    // this should be changged
  }
  unflagComment(value) {
    let index = this.flaggedComments.indexOf(value);
    this.flagNewComment = value;
    this.flagNewComment.flag = 0;
    console.log(value);
    this.http.post(HttpService.baseUrl + 'admin/unflagcomment', {
      'id': this.flagNewComment.id,
      'comment': this.flagNewComment.comment,
      'flag': this.flagNewComment.flag,
      'timestamp': this.flagNewComment.timestamp,
      'userId': this.flagNewComment.userId,
      'eventId': this.flagNewComment.eventId
    }).subscribe((result) => {
    });
    this.flaggedComments.splice(index, 1);
  }


  deleteEvent(value) {
    let index = this.flaggedEvents.indexOf(value);
    this.eventToKill = value;
    this.http.delete(HttpService.baseUrl + 'event/delete/' + this.eventToKill.id)
      .subscribe((result) => { });
    this.flaggedEvents.splice(index, 1);
    console.log('Oops');
  }

  deleteComment(value) {
    let index = this.flaggedComments.indexOf(value);
    this.commentToKill = value;
    this.http.delete(HttpService.baseUrl + 'event/delete/' + this.commentToKill.id)
      .subscribe((result) => { });
    this.flaggedComments.splice(index, 1);
    console.log('Oops');
  }

}


