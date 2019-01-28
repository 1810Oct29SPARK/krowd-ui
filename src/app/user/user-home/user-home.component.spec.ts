import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './user-home.component';

describe('UserHomeComponent', () => {

  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create a user-homepage', () => {
    expect(component).toBeTruthy();
  });

  xit('should allow user to get all events', () => {

  });

  xit('should allow user to get events by category', () => {

  });

  xit('should allow user to get events by ranking', () => {

  });

});
