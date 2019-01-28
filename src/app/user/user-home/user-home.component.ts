import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from '../../shared/models/comment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  closeResult: string;

  constructor(public dialog: MatDialog, private modalService: NgbModal) { }

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

  comments: Comment[] = [];

  eventList = [];

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
