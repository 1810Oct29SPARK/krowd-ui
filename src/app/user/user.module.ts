import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCreateEventComponent } from './user-create-event/user-create-event.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { MatTabsModule } from '@angular/material';
import { UsersService } from '../core/services/users/users.service';


@NgModule({
  declarations: [
    UserComponent,
    UserCreateEventComponent,
    UserHomeComponent,
    UserNavbarComponent,
    UserProfileComponent,
    UserAdminComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatTabsModule
  ],
  providers: [UsersService],
  bootstrap: [UserComponent]
})
export class UserModule { }
