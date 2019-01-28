import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-user-all-events',
  templateUrl: './user-all-events.component.html',
  styleUrls: ['./user-all-events.component.css']
})
export class UserAllEventsComponent implements OnInit {

  closeResult: string;
  events: Event[] = [];

  constructor(public dialog: MatDialog, private modalService: NgbModal, public eventService: EventsService) { }

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
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe( (e) => {
      this.events = e;
    });
  }

}
