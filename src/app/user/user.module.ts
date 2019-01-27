import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCreateEventComponent } from './user-create-event/user-create-event.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserAllEventsComponent } from '../user/user-all-events/user-all-events.component';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../core/image-upload/image-upload.component';


@NgModule({
  declarations: [
    UserComponent,
    UserCreateEventComponent,
    UserHomeComponent,
    UserNavbarComponent,
    UserProfileComponent,
    UserAdminComponent,
    UserAllEventsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],

})
export class UserModule { }
