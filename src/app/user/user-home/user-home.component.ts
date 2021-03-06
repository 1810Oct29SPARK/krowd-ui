import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from '../../shared/models/comment';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  closeResult: string;

  constructor(public dialog: MatDialog, private modalService: NgbModal, private eventService: EventsService) { }

  events: Event[] = [];
  singleEvent: any = null;
  eventList2 = [];
  eventId: any = 1;
  comments: Comment[] = [];
  eventList = [];

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
    this.getAllEvents();
  }

  showModal() {
    console.log('modal works');
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe(
        (events) => {
          for (let event of events) {
            this.eventList2.push(event);
            if (event.picture === null) {
              event.picture = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
            }
          }
        },
        (error) => console.log(error)
      );
    return this.eventList2;
  }

  getEventById(value) {
    this.eventService.getEventById(value)
      .subscribe(
        (event) => {
          this.singleEvent = event;
        },
        (error) => console.log(error)
      );
    return this.singleEvent;
  }

}
