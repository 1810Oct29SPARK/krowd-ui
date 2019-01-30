import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from '../../shared/models/comment';
import { EventsService } from 'src/app/core/services/events/events.service';
import { Event } from 'src/app/shared/models/event';
import { CommentsService } from '../../core/services/comments/comments.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/core/services/users/users.service';
import { CognitoService } from 'src/app/core/services/cognito/cognito.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  closeResult: string;

  constructor(public dialog: MatDialog, private modalService: NgbModal, private eventService: EventsService,
    private commentService: CommentsService, private http: HttpClient, public userService: UsersService, public cognitoService: CognitoService) { }

  events: Event[] = [];
  singleEvent: any = null;
  eventList2 = [];
  eventId: any = 10;
  comments: Comment[] = [];
  eventList = [];
  toggle: boolean = false;
  flagNewEvent: any;
  updateEvent: any;
  userId: any = 2;
  submitted = false;
  cognitoUsername: string;
  commentList = [];
  commentList2 = [];
  commentListFinal = [];

  getUser(username:string) {
    console.log(username);
    this.userService.getUserByUsername(username)
      .subscribe((data) => {
        console.log(data);
      });
  }
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
      console.log(result);
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
    this.cognitoService.getCurrentAuthUser().then(authUser => {
      this.cognitoUsername = authUser.username;
      this.getUser(this.cognitoUsername)
    })
    
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
          console.log(events);
         
        },
        (error) => console.log(error)
      );
      console.log(this.eventList2);
    return this.eventList2;
  }

  getEventById(value) {
    this.eventService.getEventById(value)
      .subscribe(
        (event) => {
          this.singleEvent = event;
          console.log(value);
          this.getCommentsByEventId(value);
        },
        (error) => console.log(error)
      );
    return this.singleEvent;
  }

  getCommentsByEventId(eventId: any) {
    console.log(eventId);
    this.commentService.getCommentsByEventId(eventId).subscribe((comments) => {
      for (let comment of comments) {
        if (comment.eventId.id == eventId) {
        this.commentListFinal.push(comment);
        console.log(comment);
        }
      }
      return(this.commentListFinal);
    })
  }
  // getCommentByEventId(value) {
  //   console.log(value);
  //   this.commentService.getCommentByEventId(value)
  //     .subscribe(
  //       (comment) => {
  //         console.log(event);
  //         this.comments = comment;
  //       },
  //       (error) => console.log(error)
  //     );
  //   return this.comments;
  // }

  // flagEvent(value) {
  //   console.log(value);
  //   this.eventService.updateEvent(value)
  //     .subscribe(
  //       (event) => {
  //         console.log(event);
  //         this.updateEvent = event;
  //         this.updateEvent.flag = 1;
  //         this.flagNewEvent = this.updateEvent;
  //       },
  //       (error) => console.log(error)
  //     );
  // }

  registerForEvent(form: NgForm) {
    this.http.post('http://localhost:8085/userEvent/addUserEvent', {
      'userId': this.userId,
      'eventId': this.eventId,
    }).subscribe((result) => {
    });
    this.submitted = true;
  }

  flagEvent(value) {
    this.flagNewEvent = value;
    this.flagNewEvent.flag = 1;
    console.log(value);
    this.http.put('http://localhost:8085/event/update', {
        'eventID' : this.flagNewEvent.id,
        'eventName' : this.flagNewEvent.name,
        'eventCategory' : this.flagNewEvent.categoryId.id,
        'eventDate' : this.flagNewEvent.date,
        'eventAddress' : this.flagNewEvent.address.streetAddress,
        'eventApartment' : JSON.stringify(this.flagNewEvent.address.apartment),
        'eventCity' : this.flagNewEvent.address.city,
        'eventState' : this.flagNewEvent.address.state,
        'eventZip' : this.flagNewEvent.address.zip,
        'eventDescription' : this.flagNewEvent.description,
        'eventFlag' : this.flagNewEvent.flag,
        'userID' : this.flagNewEvent.userId.id,
        'eventPhotoID' : this.flagNewEvent.picture
    }).subscribe((result) => {
    });
    this.submitted = true;
  }

}
