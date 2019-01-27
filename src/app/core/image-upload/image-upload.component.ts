import { Component, OnInit, Injectable } from '@angular/core';
import { CloudinaryUploader, CloudinaryOptions } from 'ng2-cloudinary';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedFile: File = null;
  imageUrl: string;
  picture: any;
  loading: any;
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'NOLAWolfe', uploadPreset: 'e06zwizv' })
  );

  constructor(httpClient: HttpClient) { }

  ngOnInit() {
  }

  upload() {
    this.loading = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      console.log(res);
      this.imageUrl = res.url;
      console.log(this.imageUrl);
      this.picture = this.imageUrl;
    };
    this.uploader.onErrorItem = function (fileItem, response, status, headers) {
      console.log('onErrorItem', fileItem, response, status, headers);
    };
    console.log('picture upload successful');
  }
}
