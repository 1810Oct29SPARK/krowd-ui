import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from 'src/app/shared/models/event';
import { CommentsService } from '../../core/services/comments/comments.service';
import { Comment } from 'src/app/shared/models/comment';


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
  toggle: boolean = false;
  comments: Comment[] = [];
  flagNewEvent: any;
  updateEvent: any;
  commentId: any;

  constructor(public dialog: MatDialog, private modalService: NgbModal,
    private eventService: EventsService, private commentService: CommentsService) { }

    ontoggle() {
      if (this.toggle === true) {
      this.toggle = false;
        } else {
        this.toggle = true;
       }
      }


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
    this.commentService.getAllComments().subscribe((data) => {
      console.log(data);
    })
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

  getCommentByEventId(value) {
    console.log(value);
    this.commentService.getCommentByEventId(value)
      .subscribe(
        (comment) => {
          console.log(event);
          this.comments = comment;
        },
        (error) => console.log(error)
      );
    return this.comments;
  }

  flagEvent(value) {
    console.log(value);
    this.eventService.updateEvent(value)
    .subscribe(
      (event) => {
        console.log(event);
        this.updateEvent = event;
        this.updateEvent.flag = 1;
        this.flagNewEvent = this.updateEvent;
      },
      (error) => console.log(error)
    );
  }

  flagComment(commentId) {
    console.log('flagComment() triggered!')
    this.commentService.flagComment(commentId).subscribe((comments) => {
      console.log(comments);
    })
  }

}
