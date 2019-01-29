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
    service = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });

  it('should get a list of all events', () => {
    const events: Event[] = [
      {
        id: 179,
        name: 'bowling',
        category: 'sports',
        date: new Date(),
        time: Date.now(),
        address: '123 BowlingAlley Blvd',
        ratingScore: 9001,
        flagScore: 0,
        zip: 12345,
        hostId: 1,
        city: 'Tampa',
        state: 'Florida'
      },
      {
        id: 328,
        name: 'basketball',
        category: 'sports',
        date: new Date(),
        time: Date.now(),
        address: '123 Basketball Ct',
        ratingScore: 4501,
        flagScore: 0,
        zip: 56789,
        hostId: 1,
        city: 'Tampa',
        state: 'Florida'
      }
    ];
    spyOn(service, 'getAllEvents').and.callFake(() => {
      return Observable.from([events]);
    });
    component.ngOnInit();
    expect(component.events).toEqual(events);
  });

  it('should add an event', () => {
    const events: Event[] = [
      {
        id: 179,
        name: 'bowling',
        category: 'sports',
        date: new Date(),
        time: Date.now(),
        address: '123 BowlingAlley Blvd',
        ratingScore: 9001,
        flagScore: 0,
        zip: 12345,
        hostId: 1,
        city: 'Tampa',
        state: 'Florida'
      },
      {
        id: 328,
        name: 'basketball',
        category: 'sports',
        date: new Date(),
        time: Date.now(),
        address: '123 Basketball Ct',
        ratingScore: 4501,
        flagScore: 0,
        zip: 56789,
        hostId: 1,
        city: 'Tampa',
        state: 'Florida'
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
      hostId: 17,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    service.addEvent(newEvent);
    expect(component.events).toContain(newEvent);
  });

  it('should get an event by its eventId', () => {
    const event1 = {
      id: 23000,
      name: 'Community Kickball',
      category: 'Sports',
      address: '14665 Fowler Avenue',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 17,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const event2 = {
      id: 24000,
      name: 'Basketball',
      category: 'Sports',
      address: '14505 Prism Circle',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 17,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const events: Event[] = [
      event1,
      event2
    ];
    spyOn(service, 'getEventById').and.callFake(() => {
      return Observable.from([events]);
    });
    service.getEventById(24000);
  });

  it('Should get an event by its category', () => {
    const event1 = {
      id: 22000,
      name: 'Church Picnic',
      category: 'Food & Drink',
      address: '1652 Cranberry Lane',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 17,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const event2 = {
      id: 24000,
      name: 'Bird Watching',
      category: 'Nature',
      address: 'Lettuce Lake Park',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 17,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const events: Event[] = [
      event1,
      event2
    ];
    spyOn(service, 'getEventsByCategory').and.callFake(() => {
      return Observable.from([events]);
    });
    service.getEventsByCategory(5);
  });

  it('Should get an event by the host ID', () => {
    const event1 = {
      id: 22000,
      name: 'Fondue',
      category: 'Food & Drink',
      address: '3215 Silver Meadow Court',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 14,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const event2 = {
      id: 24000,
      name: 'Swamp Kayaking',
      category: 'Nature',
      address: 'Lettuce Lake Park',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 12,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const events: Event[] = [
      event1,
      event2
    ];
    spyOn(service, 'getEventsByUserId').and.callFake(() => {
      return Observable.from([events]);
    });
    service.getEventsByUserId(17);
  });

  it('Should allow user to register for event', () => {
    const event1 = {
      id: 16000,
      name: 'Astro Photography',
      category: 'Outdoors',
      address: '59000 County Line Road',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37921,
      hostId: 14,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const event2 = {
      id: 24000,
      name: 'Beach Volleyball',
      category: 'Sports',
      address: 'Clearwater Beach',
      ratingScore: 10000,
      flagScore: 0,
      zip: 37331,
      hostId: 12,
      date: new Date(),
      time: Date.now(),
      city: 'Clearwater',
      state: 'Florida'
    };
    const events: Event[] = [
      event1,
      event2
    ];
    spyOn(service, 'registerForEvent').and.callFake(() => {
      return Observable.from([events]);
    });
    service.registerForEvent(15, 24000);
  });


});
