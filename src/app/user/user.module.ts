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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserComponent,
    UserCreateEventComponent,
    UserHomeComponent,
    UserNavbarComponent,
    UserProfileComponent,
    UserAdminComponent,
    UserAllEventsComponent,
<<<<<<< HEAD
   
=======
>>>>>>> 9d9e25a88f69b7a1409effadf97073d8b05bbe25
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
<<<<<<< HEAD
  ]
=======
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: []
>>>>>>> 9d9e25a88f69b7a1409effadf97073d8b05bbe25
})
export class UserModule { }
