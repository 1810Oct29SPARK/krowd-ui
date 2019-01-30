import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../shared/models/event';
import { EventsService } from '../../core/services/events/events.service';
import { CognitoService } from 'src/app/core/services/cognito/cognito.service';

@Component({
  selector: 'app-user-create-event',
  templateUrl: './user-create-event.component.html',
  styleUrls: ['./user-create-event.component.css']
})
export class UserCreateEventComponent implements OnInit {

  submitted = false;

  cognitoUsername: string;

  eventName: any = null;
  eventAddress: any = null;
  eventCity: any = null;
  eventState: any = null;
  eventZip: any = null;
  eventCategory: any = null;
  eventDescription: any = null;
  eventDate: any = null;
  eventTime: any = null;
  eventApartment: any = null;
  userId: any = null;

  // code for image upload
  eventPhotoID: File = null;
  imageURL: string;
  picture = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhazivqjc', uploadPreset: 'zalhcbr6' })
  );

  loading: any;

  constructor(private http: HttpClient, private eventservice: EventsService, public cognitoService: CognitoService) { }

  ngOnInit() {
    this.cognitoService.getCurrentAuthUser().then(authUser => {
      this.cognitoUsername = authUser.username;
    });
  }

  createEvent(form: NgForm) {
  this.http.post('http://localhost:8085/event/add', {
  'eventName': this.eventName,
  'eventCategory': this.assignCategory(this.eventCategory),
  'eventDate': JSON.stringify(this.eventDate),
  'eventAddress': this.eventAddress,
  'eventApartment': this.eventApartment,
  'eventCity': this.eventCity,
  'eventState': this.eventState,
  'eventZip': this.eventZip,
  'eventDescription': this.eventDescription,
  'eventFlag': JSON.stringify(0),
  'userID': 1,
  'eventPhotoID': ''
}).subscribe((result) => {
});
    // console.log('Event Successfully Created');
    // console.log(form);
    // const value = form.value;
    // console.log(form.value);

    // const userId = 0;
    // // this.authService.getCurrentUser();

    // const eventCategory = this.assignCategory(value.eventCategory);


    // const newEvent = new Event(
    //   null,
    //   value.eventName,
    //   eventCategory,
    //   value.eventDate,
    //   value.eventTime,
    //   value.eventAddress,
    //   value.eventApartment,
    //   value.eventCity,
    //   value.eventState,
    //   value.eventZip,
    //   null,
    //   0,
    //   userId,
    //   this.imageURL
    // );
    this.submitted = true;
    // this.eventservice.addEvent(value.eventName, value.eventCategory, value.eventDate, value.eventTime,
    //   value.eventAddress, value.eventApartment, value.eventCity, value.eventState, value.eventZip, null,
    //   0, value.userId, this.eventPhotoID);
  }

  assignCategory(category) {
    switch (category) {
      case 'Art': {
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
        return 7;
      }
    }
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
