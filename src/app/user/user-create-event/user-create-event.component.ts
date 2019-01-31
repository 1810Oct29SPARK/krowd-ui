import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../shared/models/event';
import { EventsService } from '../../core/services/events/events.service';
import { CognitoService } from 'src/app/core/services/cognito/cognito.service';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user-create-event',
  templateUrl: './user-create-event.component.html',
  styleUrls: ['./user-create-event.component.css']
})
export class UserCreateEventComponent implements OnInit {

  eventName: any;
  eventAddress: any;
  eventApartment: any;
  eventCity: any;
  eventState: any;
  eventZip: any;
  eventTime: any;
  eventCategory: any;
  eventDescription: any;
  eventDate: any;

  submitted = false;

  cognitoUsername: string;
  createdEvent: Event[] = [];

  // code for image upload
  eventPhotoID: File = null;
  imageURL: string;
  picture = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhazivqjc', uploadPreset: 'zalhcbr6' })
  );

  loading: any;

  user: User;

  constructor(
    private http: HttpClient, private eventservice: EventsService, public cognitoService: CognitoService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.cognitoService.getCurrentAuthUser().then(authUser => {
      this.cognitoUsername = authUser.username;

      this.userService.getUserByUsername(this.cognitoUsername)
        .subscribe((response) => this.user = response);
    });
  }

  createEvent(form: NgForm) {
    if (form.value.eventDate.month < 10) {
      form.value.eventDate.month = '0' + form.value.eventDate.month;
    } else if (form.value.eventDate.day < 10) {
      form.value.eventDate.day = '0' + form.value.eventDate.day;
    }

    console.log(form.value.eventTime);
    let event: any = {
      'name': form.value.eventName,
      'description': form.value.eventDescription,
      'picture': this.imageURL,
      'date': form.value.eventDate.year + '-' + form.value.eventDate.month + '-' + form.value.eventDate.day + 'T00:00',
      'address': form.value.eventAddress,
      'apartment': form.value.eventApartment,
      'city': form.value.eventCity,
      'state': form.value.eventState,
      'zip': form.value.eventZip,
      'score': 0,
      'flag': 0,
      'userId': this.user.id,
      'categoryId': this.assignCategory(form.value.eventCategory)
    };
    console.log(event);
    this.eventservice.addEvent(event)
      .subscribe((result) => {
      });
    this.submitted = true;
  }

  assignCategory(category) {
    console.log(category);
    switch (category) {
      case 'Art': {
        console.log('you are in Art case');
        return 1;
      }
      case 'Food & Drink': {
        return 2;
      }
      case 'Music': {
        return 3;
      }
      case 'Outdoors': {
        return 4;
      }
      case 'Sprots': {
        return 5;
      }
      case 'Volunteering': {
        return 6;
      }
      case 'Other': {
        console.log('you are in other case');
        return 7;
      }
    }
  }

  upload() {
    this.loading = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      let res: any = JSON.parse(response);
      this.imageURL = res.url;
      console.log(this.imageURL);
      this.picture = this.imageURL;
    };
    this.uploader.onErrorItem = function (fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    console.log('picture upload successful');
  }

}

// this.http.post('http://localhost:8085/event/add', {
//   'eventName': this.value.eventName,
//   'eventCategory': this.value.eventCategory,
//   'eventDate': this.value.eventDate,
//   'eventAddress': this.value.eventAddress,
//   'eventApartment': this.value.eventApartment,
//   'eventCity': this.value.eventCity,
//   'eventState': this.value.eventState,
//   'eventZip': this.value.eventZip,
//   'eventDescription': this.value.eventDescription,
//   'eventFlag': JSON.stringify(0),
//   'userID': this.value.userId,
//   'eventPhotoID': this.eventPhotoID
// }).subscribe((result) => {

// });
