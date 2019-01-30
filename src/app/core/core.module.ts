import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { MatButtonModule } from '@angular/material/button';

import { CoreRoutingModule } from './core-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { EventsComponent } from './events/events.component';

import { EventsService } from './services/events/events.service';
import { UsersService } from './services/users/users.service';
import { CommentsService } from './services/comments/comments.service';


import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { CognitoService } from './services/cognito/cognito.service';
import { User } from '../shared/models/user';
import { Event } from '../shared/models/event';
import { Comment } from '../shared/models/comment';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { TokenInterceptorService } from './services/cognito/token-interceptor.service';


@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    EventsComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreRoutingModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    AmplifyAngularModule,
    MatButtonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [EventsService, UsersService, CommentsService, AmplifyService, CognitoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }]
})
export class CoreModule { }
