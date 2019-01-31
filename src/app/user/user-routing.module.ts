import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCreateEventComponent } from './user-create-event/user-create-event.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    // children: [
    //   {
    //     path: '',
        // canActivateChild: [],
        children: [
          { path: 'home', component: UserHomeComponent },
          { path: 'profile', component: UserProfileComponent },
          { path: 'create', component: UserCreateEventComponent },
          {
            path: 'admin',
            // canActivate: [],
            component: UserAdminComponent
          },
          { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
      }
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
