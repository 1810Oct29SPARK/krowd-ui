import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminComponent } from './user-admin.component';

describe('UserAdminComponent', () => {
  let component: UserAdminComponent;
  let fixture: ComponentFixture<UserAdminComponent>;

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
  xit('should allow admin to get all users', () => {

  })
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
