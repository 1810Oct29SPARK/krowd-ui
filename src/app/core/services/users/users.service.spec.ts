import { TestBed } from '@angular/core/testing';

import { User } from '../../../shared/models/user';
import { Event } from '../../../shared/models/event';
import { UsersService } from './users.service';
import { UserComponent } from 'src/app/user/user.component';
import { Observable } from 'rxjs';

describe('UsersService', () => {

  let component: UserComponent;
  let service: UsersService;

  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    service = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('should get a list of all users', () => {
    const users: User[] = [
      {
        id: 1,
        username: 'JDoe',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jdoe@gmail.com',
        reputation: 0,
        flagScore: 0,
        accountStatus: 1,
        photoUrl: 'https://www.fakepersongenerator.com/Face/female/female20161025617883789.jpg'
      },
      {
        id: 2,
        username: 'BMullen',
        firstname: 'Barbara',
        lastname: 'Mullen',
        email: 'bmullen@gmail.com',
        reputation: 0,
        flagScore: 0,
        accountStatus: 1,
        photoUrl: 'https://www.fakepersongenerator.com/Face/female/female2009102331933570.jpg'
      }
    ];
    spyOn(service, 'getAllUsers').and.callFake(() => {
      return Observable.from([users]);
    });
    component.ngOnInit();
    expect(component.users).toEqual(users);
  });

  it('should add a new user', () => {
    const users: User[] = [
      {
        id: 1,
        username: 'JDoe',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jdoe@gmail.com',
        reputation: 0,
        flagScore: 0,
        accountStatus: 1,
        photoUrl: 'https://www.fakepersongenerator.com/Face/female/female20161025617883789.jpg'
      },
      {
        id: 2,
        username: 'BMullen',
        firstname: 'Barbara',
        lastname: 'Mullen',
        email: 'bmullen@gmail.com',
        reputation: 0,
        flagScore: 0,
        accountStatus: 1,
        photoUrl: 'https://www.fakepersongenerator.com/Face/female/female2009102331933570.jpg'
      }
    ];
    const newUser: User = {
      id: 3,
      username: 'MPhilips',
      firstname: 'Mary',
      lastname: 'Philips',
      email: 'mphilips@gmail.com',
      reputation: 0,
      flagScore: 0,
      accountStatus: 1,
      photoUrl: 'https://www.fakepersongenerator.com/Face/female/female20161024794260285.jpg'
    };
    service.addUser(newUser);
    expect(component.users).toContain(newUser);
  });

  it('should get a user by their userId', () => {
    const user1 = {
      id: 1,
      username: 'JDoe',
      firstname: 'Jane',
      lastname: 'Doe',
      email: 'jdoe@gmail.com',
      reputation: 0,
      flagScore: 0,
      accountStatus: 1,
      photoUrl: 'https://www.fakepersongenerator.com/Face/female/female20161025617883789.jpg'
    };
    const user2 = {
      id: 2,
      username: 'Bmullen',
      firstname: 'Barbara',
      lastname: 'Mullen',
      email: 'bmullen@gmail.com',
      reputation: 0,
      flagScore: 0,
      accountStatus: 1,
      photoUrl: 'https://www.fakepersongenerator.com/Face/female/female2009102331933570.jpg'
    };
    const users: User[] = [
      user1,
      user2
    ];
    spyOn(service, 'getUserById').and.callFake(() => {
      return Observable.from([users]);
    });
    service.getUserById(2);
    expect(service.user).toEqual(user2);
  });

  it('should get a user by an eventId', () => {
    const user1 = {
      id: 1,
      username: 'JDoe',
      firstname: 'Jane',
      lastname: 'Doe',
      email: 'jdoe@gmail.com',
      reputation: 0,
      flagScore: 0,
      accountStatus: 1,
      photoUrl: 'https://www.fakepersongenerator.com/Face/female/female20161025617883789.jpg'
    };
    const user2 = {
      id: 2,
      username: 'Bmullen',
      firstname: 'Barbara',
      lastname: 'Mullen',
      email: 'bmullen@gmail.com',
      reputation: 0,
      flagScore: 0,
      accountStatus: 1,
      photoUrl: 'https://www.fakepersongenerator.com/Face/female/female2009102331933570.jpg'
    };
    const users: User[] = [
      user1,
      user2
    ];
    const event1 = {
      id: 25000,
      name: 'Go Bowling',
      category: 'Sports',
      address: '14355 Bearss Avenue',
      ratingScore: 100000000,
      flagScore: 0,
      zip: 15973,
      hostId: 1,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const event2 = {
      id: 35000,
      name: 'Community Hiking',
      category: 'Outdoors',
      address: 'Morris Bridge Park',
      ratingScore: 100000000,
      flagScore: 0,
      zip: 75391,
      hostId: 2,
      date: new Date(),
      time: Date.now(),
      city: 'Tampa',
      state: 'Florida'
    };
    const events: Event[] = [
      event1,
      event2
    ];
    spyOn(service, 'getUserByEventId').and.callFake(() => {
      return Observable.from([users]);
    });
    service.getUserByEventId(1);
    expect(service.user).toEqual(user1);
  });

});
