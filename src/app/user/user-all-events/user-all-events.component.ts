import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from 'src/app/shared/models/event';
import { CommentsService } from '../../core/services/comments/comments.service';


@Component({
  selector: 'app-user-all-events',
  templateUrl: './user-all-events.component.html',
  styleUrls: ['./user-all-events.component.css']
})
export class UserAllEventsComponent implements OnInit {
  commentsList = [];
  closeResult: string;
  events: Event[] = [];
  eventList2 = [];
  eventId: any = 1;
  singleEvent: any = null;

  constructor(public dialog: MatDialog, private modalService: NgbModal,
    private eventService: EventsService, private commentService: CommentsService) { }


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

  getComments() {
    console.log('getComments clicked');
    this.commentService.getCommentByEventId(this.eventId)
        .subscribe(
          (comments) => {
            for (let comment of comments) {
              console.log(comment);
              // this.commentUserID = comment['user_id'];
              // console.log(this.commentUserID);
              // this.dataService.getUserById(this.commentUserID)
              // .subscribe((res)=> {
              //   console.log(res);
              //   this.usercomment = {
              //     username: res['username'],
              //     picture: res['photo_url'],
              //     comment: comment
              //   }
              //   console.log("New user comment:");
              //   console.log(this.usercomment);
              //   this.commentsList.push(this.usercomment);

              // }
              // )
              }
            },
          (error) => console.log(error)
          );
        console.log('Comments list: ');
        return this.commentsList;
  }

}
