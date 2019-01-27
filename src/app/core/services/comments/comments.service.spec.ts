import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { Comment } from '../../../shared/models/comment';
import { CommentsService } from './comments.service';
import { UserHomeComponent } from '../../../user/user-home/user-home.component';

describe('CommentsService', () => {
  let component: UserHomeComponent;
  let service: CommentsService;
  
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: CommentsService = TestBed.get(CommentsService);
    expect(service).toBeTruthy();
  });

  it('should get all comments', () => {
    const comments: Comment[] = [
      {
        id: 592,
        description: 'Great game today!',
        postedBy: 52, //FK
        // time: Time; //Optional
        flagScore: 0,
        eventId: 72 //FK
    },
    {
      id: 843,
      description: 'Wow, it was pouring today!  Good call on the indoor event!',
      postedBy: 71, //FK
      // time: Time; //Optional
      flagScore: 0,
      eventId: 83 //FK
  }
    ];
    spyOn(service, 'getAllComments').and.callFake(() => {
      return Observable.from([comments]);
    });
    component.ngOnInit();
    expect(component.comments).toEqual(comments);
  });
});
