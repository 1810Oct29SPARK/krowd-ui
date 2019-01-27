import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventsService } from 'src/app/core/services/events/events.service';
import { NgForm } from '@angular/forms';
import { Event } from 'src/app/shared/models/event';
import { CloudinaryUploader, CloudinaryOptions } from 'ng2-cloudinary';

@Component({
  selector: 'app-user-create-event',
  templateUrl: './user-create-event.component.html',
  styleUrls: ['./user-create-event.component.css']
})

export class UserCreateEventComponent implements OnInit {

  submitted = false;

  selectedFile: File = null;
  imageUrl: string;
  picture: any;
  loading: any;
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'NOLAWolfe', uploadPreset: 'e06zwizv' })
  );

  constructor(httpClient: HttpClient, private eventService: EventsService) { }

  ngOnInit() {
  }



  // onEventCreated(form: NgForm) {
  //   const value = form.value;

  //   const newEvent = new Event(
  //     null, // id
  //     value.name,
  //     value.category,
  //     value.date,
  //     value.time,
  //     value.address,
  //     value.city,
  //     value.state,
  //     value.zip,
  //     null, // ratingScore
  //     null, // flagScore
  //     null
  //   );

  //   console.log(newEvent);
  //   this.submitted = true;
  //   this.eventService.addEvent(newEvent);
  // }

}
