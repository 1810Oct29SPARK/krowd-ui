import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../shared/models/event'
import { EventsService } from '../../core/services/events/events.service'

@Component({
  selector: 'app-user-create-event',
  templateUrl: './user-create-event.component.html',
  styleUrls: ['./user-create-event.component.css']
})
export class UserCreateEventComponent implements OnInit {
  submitted = false;

  constructor(private http: HttpClient, private eventservice: EventsService) { }

  ngOnInit() {
  }

  onEventCreated(form: NgForm) {
    console.log('Event Successfully Created');
    console.log(form);
    const value = form.value;
    console.log(form.value)

    const userId = 0;
    // this.authService.getCurrentUser();


    const newEvent = new Event(null, value.name, value.category, value.date, value.time, value.address, null, null, value.zip, userId);
    console.log(newEvent)
    this.submitted=true;
    this.eventservice.addEvent(newEvent);
  }


  //code for image upload
  selectedFile: File = null;
  imageURL: string;
  picture: string = "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";


  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'NOLAWolfe', uploadPreset: 'e06zwizv' })
  );

  loading: any;
  upload() {
    this.loading = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      let res: any = JSON.parse(response);
      console.log(res);
      this.imageURL = res.url;
      console.log(this.imageURL);
      this.picture = this.imageURL;
    }
    this.uploader.onErrorItem = function (fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    console.log("picture upload successful")
  }


}
