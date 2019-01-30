import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from '../../shared/models/event';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  
  response: any = null;
  closeResult: string;
  flaggedEvents = [];
  eventId: any = 1;

  constructor(public dialog: MatDialog, private modalService: NgbModal, private eventService: EventsService) { }

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

  dismissFlaggedEvent(flagged: Event) {
    flagged.flag = 0;
    this.modalService.dismissAll();
    this.eventService.updateEvent(flagged);
   
  }

}
