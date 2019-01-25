import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateEventComponent } from './user-create-event.component';

describe('UserCreateEventComponent', () => {
  let component: UserCreateEventComponent;
  let fixture: ComponentFixture<UserCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create a new event', () => {

    expect(component).toBeTruthy();
  });
});
