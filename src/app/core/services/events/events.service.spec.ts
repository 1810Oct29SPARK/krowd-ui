import { TestBed } from '@angular/core/testing';

import { Event } from '../../../shared/models/event';
import { EventsComponent } from '../../events/events.component';
import { EventsService } from './events.service';
import { UserCreateEventComponent } from '../../../user/user-create-event/user-create-event.component';
import { Observable } from 'rxjs';

describe('EventsService', () => {
  let component: EventsComponent;
  let newEventComponent: UserCreateEventComponent;
  let service: EventsService;
  
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });

  it('should get a list of all events', () => {
    const events: Event[] = [
      {
        id: 179,
        name: 'bowling',
        category: 'sports',
        // date: 'Feb 1, 2019',
        //time: TimeRanges; //Optional
        address: '123 BowlingAlley Blvd',
        ratingScore: 9001,
        flagScore: 0,
        zip: 12345,
        hostId: 1
    },
    {
      id: 328,
      name: 'basketball',
      category: 'sports',
      // date: 'Feb 15, 2019',
      //time: TimeRanges; //Optional
      address: '123 Basketball Ct',
      ratingScore: 4501,
      flagScore: 0,
      zip: 56789,
      hostId: 1
    }
    ];
    spyOn(service, 'getAllEvents').and.callFake(() => {
      return Observable.from([events]);
    });
    component.ngOnInit();
    expect(component.events).toEqual(events);
  })

  it('should add an event', () => {
    const events: Event[] = [
      {
        id: 179,
        name: 'bowling',
        category: 'sports',
        // date: 'Feb 1, 2019',
        //time: TimeRanges; //Optional
        address: '123 BowlingAlley Blvd',
        ratingScore: 9001,
        flagScore: 0,
        zip: 12345,
        hostId: 1
    },
    {
      id: 328,
      name: 'basketball',
      category: 'sports',
      // date: 'Feb 15, 2019',
      //time: TimeRanges; //Optional
      address: '123 Basketball Ct',
      ratingScore: 4501,
      flagScore: 0,
      zip: 56789,
      hostId: 1
    }
    ];
    const newEvent: Event = {
      id: 25000,
      name: 'Magic',
      category: 'Card Game',
      address: '123 TheGathering Ave',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 17
    };
    newEventComponent.addEvent(newEvent);
    expect(component.events).toContain(newEvent);
  });
});
