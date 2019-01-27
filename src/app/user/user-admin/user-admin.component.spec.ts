import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminComponent } from './user-admin.component';
import { UsersService } from 'src/app/core/services/users/users.service';

describe('UserAdminComponent', () => {
  let component: UserAdminComponent;
  let fixture: ComponentFixture<UserAdminComponent>;
  let service: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create admin home', () => {
    expect(component).toBeTruthy();
  });
  xit('should all admin to get all events', () => {

  })
  // xit('should allow admin to get all users', () => {
  //   const users : User[]=[
  //     {
  //       id: 1,
  //       username: 'EHiggins',
  //       firstname: 'Emily',
  //       lastname: 'Higgins',
  //       email: 'ehiggins@revature.com',
  //       reputation: '4.5',
  //       flagScore: 0,
  //       accountStatus: 'active',
  //       photoUrl: 'https://revature.com/wp-content/uploads/2017/12/revature-logo-600x219.png'

  //     }
  //   ];

  //   spyOn(service,'getUsers').and.callFake(() => {
  //     return Observable.from([users]);
  //   });

  //   component.ngOnInit();

  //   expect(component.users).toEqual(users);

  // });
  xit('should allow admin to get all admins', () => {

  })
  xit('should allow admin to view all flagged events', () => {
    
  })
  xit('should allow admin to view all flagged comments', () => {

  })
  xit('should allow admin to deactivate user', () => {

  })
  xit('should allow admin to delete comment', () => {

  })
  xit('should allow admin to delete event', () => {

  })
});
