import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(':',() => {

    function setup() {
      const fixture = TestBed.createComponent(UserComponent);
      const component = fixture.componentInstance;
      const userService = fixture.debugElement.injector.get(UserService);

      return { fixture, component, userService };
    }




  it('should create app component', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
  it('should display logged-in user name', () => {
    const { fixture, component, userService } = setup();
    const mockUser = {name: 'Emily' };
    spyOn(userService, 'getUser').and.returnValue(mockUser);

    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const loggedInUser = compile.querySelector('p');
    expect(loggedInUser.textContent).toBe('Welcome Emily');
  })
  it('should display user is NOT logged in message', () => {
    const {fixture, component, userService } = setup();
    spyOn(userService, 'getUser').and.returnValue(undefined);
    fixture.detectChanges();

    const compile = fixture.debugElement.nativeElement;
    const loggedInUser = compile.querySelector('p');
    expect(loggedInUser.textContent).toBe('user is NOT logged in');
  });
});
  
});
