import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserAsyncComponent } from './user-async/user-async.component';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from './core/services/events/events.service';
import { CommentsService } from './core/services/comments/comments.service';
import { UsersService } from './core/services/users/users.service';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from './core/image-upload/image-upload.component';
import { Event } from './shared/models/event';
import { User } from './shared/models/user';
import { Comment } from './shared/models/comment';
import { Admin } from './shared/models/admin';
import { AdminService } from './core/services/admin/admin.service';


@NgModule({
  declarations: [
    AppComponent,
    UserAsyncComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    NgbModule,
    FormsModule
  ],
  providers: [EventsService, CommentsService, UsersService, AdminService, Event],
  bootstrap: [AppComponent]
})
export class AppModule { }
