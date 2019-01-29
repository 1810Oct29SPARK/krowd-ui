import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersService } from '../core/services/users/users.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {

  let component: UserComponent;
  let service: UsersService;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(':', () => {

    function setup() {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
      service = fixture.debugElement.injector.get(UsersService);

      return { fixture, component, service };
    }

    xit('should create app component', () => {
      let env = setup();
      expect(env).toBeTruthy();
    });

    it('should display logged-in user name', () => {
      const mockUser = { name: 'Emily' };
      spyOn(service, 'getUserById').and.returnValue(mockUser);

      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const loggedInUser = compile.querySelector('p');
      expect(loggedInUser.textContent).toBe('Welcome Emily');
    });

    it('should display user is NOT logged in message', () => {
      spyOn(service, 'getUserById').and.returnValue(undefined);
      fixture.detectChanges();

      const compile = fixture.debugElement.nativeElement;
      const loggedInUser = compile.querySelector('p');
      expect(loggedInUser.textContent).toBe('user is NOT logged in');
    });

    xit('should add a new user', () => {

    });

    xit('should add a new admin', () => {

    });

  });

});
