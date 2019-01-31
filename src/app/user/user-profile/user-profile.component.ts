import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';
import { CognitoService } from 'src/app/core/services/cognito/cognito.service';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { UsersService } from 'src/app/core/services/users/users.service';
import { CommentsService } from 'src/app/core/services/comments/comments.service';
import { User } from 'src/app/shared/models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


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
  userComment = [];
  singleEvent: any = null;
  userInfo: any = null;
  selectedFile: File = null;
  imageURL: string;
  userId: number = parseInt(sessionStorage.getItem('id'), 10);
  firstname: string;
  lastname: string;
  result: User;
  picture = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
  user: User;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhazivqjc', uploadPreset: 'zalhcbr6' })
  );

  loading: any;

  constructor(
    public dialog: MatDialog,
    private modalService: NgbModal,
    public cognitoService: CognitoService,
    public userService: UsersService,
    public eventService: EventsService,
    public commentService: CommentsService,
    public router: Router
  ) { }

  cognitoUsername: string;
  userid = this.userService.getUserByUsername(this.cognitoUsername).subscribe((result) => {
    this.result = result;
  });

  ngOnInit() {
    this.cognitoService.getCurrentAuthUser().then(authUser => {
      this.cognitoUsername = authUser.username;
      this.populateProfile(this.cognitoUsername);
    });
    this.getEventsByUserId();
    this.getCommetsByUserId();
  }

  populateProfile(username: string) {
    this.userService.getUserByUsername(username)
      .subscribe((data) => {
        this.userInfo = data;
      });
    return this.userInfo;
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

  getEventsByUserId() {
    // let userId: number = parseInt(sessionStorage.getItem('id'), 10);
    this.eventService.getEventsByUserId(this.userId)
      .subscribe(
        (events) => {
          for (let event of events) {
            this.attendingEvents.push(event);
            if (event.picture === null) {
              event.picture = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
            }
          }
        },
        (error) => console.log(error)
      );
    return this.attendingEvents;
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

  getCommetsByUserId() {
    let userId: number = parseInt(sessionStorage.getItem('id'), 10);
    this.commentService.getCommentByUserId(userId)
      .subscribe(
        (comments) => {
          for (let comment of comments) {
            this.userComment.push(comment);
          }
          // this.userComment.push(comments);
          // console.log('after loop' + this.userComment);
        },
        (error) => console.log(error)
      );
    return this.userComment;
  }


  upload() {
    this.loading = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      let res: any = JSON.parse(response);
      console.log(res);
      this.imageURL = res.url;
      console.log(this.imageURL);
      this.picture = this.imageURL;
    };
    this.uploader.onErrorItem = function (fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };

  }

  onUserUpdated(ngForm: NgForm) {
    console.log(this.userInfo);
    let user: any = {
      'id': this.userInfo.id,
      'username': this.userInfo.username,
      'firstname': this.firstname,
      'lastname': this.lastname,
      'email': this.userInfo.email,
      'reputation': this.userInfo.reputation,
      'picture': this.picture,
      'cognito': this.userInfo.cognito,
      'accountStatus': this.userInfo.accountStatus,
      'roleId': this.userInfo.roleId
    };
    console.log(user);
    this.userService.updateUser(user).subscribe((userObject: User) => {
      this.user = userObject;
      this.modalService.dismissAll();
      this.router.navigate(['/krowd/home']);
    }
    );
  }
}
