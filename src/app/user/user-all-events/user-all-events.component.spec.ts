import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllEventsComponent } from './user-all-events.component';

describe('UserAllEventsComponent', () => {
  let component: UserAllEventsComponent;
  let fixture: ComponentFixture<UserAllEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAllEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
