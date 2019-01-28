import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';

describe('EventsComponent', () => {

  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should allow event host to update event', () => {
    expect(component).toBeTruthy();
  });
  xit('should allow event host to cancel event', () => {

  });
  xit('should allow event host to upload an event image', () => {

  });
  xit('should allow user to register for an event', () => {

  });

});
