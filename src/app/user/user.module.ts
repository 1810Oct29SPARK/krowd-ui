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

@NgModule({
  declarations: [
    UserComponent,
    UserCreateEventComponent,
    UserHomeComponent,
    UserNavbarComponent,
    UserProfileComponent,
    UserAdminComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class UserModule { }
