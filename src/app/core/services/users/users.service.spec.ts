import { TestBed } from '@angular/core/testing';

import { User } from '../../../shared/models/user';
import { UsersService } from './users.service';
import { UserComponent } from 'src/app/user/user.component';
import { Observable } from 'rxjs';

describe('UsersService', () => {

  let component: UserComponent;
  let service: UsersService;

  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
  it('should get a list of all users', () => {
    const users: User[] = [
      {
        id: 1,
        username: 'OoohBanana',
        firstname: 'Donkey',
        lastname: 'Kong',
        email: 'DK@gmail.com',
        reputation: 'good',
        flagScore: 0,
        accountStatus: 'Active',
        photoUrl: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwj93s763YzgAhUjja0KHfYmCO0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.polygon.com%2Ffeatures%2F2018%2F5%2F10%2F17333228%2Fdonkey-kong-rankings&psig=AOvVaw2ygL8rrLXusOqB56PZVJOS&ust=1548636292299824'
      },
      {
        id: 2,
        username: 'ItsaMe',
        firstname: 'Mario',
        lastname: 'Mario',
        email: 'SuperMario@gmail.com',
        reputation: 'good',
        flagScore: 0,
        accountStatus: 'Active',
        photoUrl: 'http://mario.nintendo.com/assets/img/home/intro/mario-pose2.png'
      }
    ];
    spyOn(service, 'getAllUsers').and.callFake(() => {
      return Observable.from([users]);
    });
    component.ngOnInit();
    expect(component.user).toEqual(users);
  });
});
