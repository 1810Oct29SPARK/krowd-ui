import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/core/services/events/events.service';

import { CognitoService } from 'src/app/core/services/cognito/cognito.service';

import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';


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
<<<<<<< HEAD
  attendingEvents = [];
  eventList2 = [];

  constructor(public dialog: MatDialog, private modalService: NgbModal, private eventService: EventsService) { }

  ngOnInit() {
    this.getEventsByUserId();
=======
  selectedFile: File = null;
  imageURL: string;
  picture = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhazivqjc', uploadPreset: 'zalhcbr6' })
  );

  loading: any;

  constructor(public dialog: MatDialog, private modalService: NgbModal, public cognitoService: CognitoService) { }

  cognitoUsername: string;

  ngOnInit() {
    this.cognitoService.getCurrentAuthUser().then(authUser => {
      this.cognitoUsername = authUser.username;
    });
>>>>>>> 0c87891fcd16f721e3de36af9fb2b36155d79f7b
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

<<<<<<< HEAD
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
=======
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
}
>>>>>>> 0c87891fcd16f721e3de36af9fb2b36155d79f7b
