import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { Comment } from '../../../shared/models/comment';
import { CommentsService } from './comments.service';
import { EventsComponent } from '../../events/events.component';

describe('CommentsService', () => {

  let component: EventsComponent;
  let service: CommentsService;

  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    service = TestBed.get(CommentsService);
    expect(service).toBeTruthy();
  });

  it('should get all comments', () => {
    const comments: Comment[] = [
      {
        id: 592,
        description: 'Great game today!',
        postedBy: 52,
        flagScore: 0,
        eventId: 72,
        time: Date.now()
      },
      {
        id: 843,
        description: 'Wow, it was pouring today!  Good call on the indoor event!',
        postedBy: 71,
        flagScore: 0,
        eventId: 83,
        time: Date.now()
      }
    ];
    spyOn(service, 'getAllComments').and.callFake(() => {
      return Observable.from([comments]);
    });
    component.ngOnInit();
    expect(component.comments).toEqual(comments);
  });

  it('should add a new comment', () => {
    const comments: Comment[] = [
      {
        id: 592,
        description: 'Great game today!',
        postedBy: 52,
        flagScore: 0,
        eventId: 72,
        time: Date.now()
      },
      {
        id: 843,
        description: 'Wow, it was pouring today!  Good call on the indoor event!',
        postedBy: 71,
        flagScore: 0,
        eventId: 83,
        time: Date.now()
      }
    ];
    const newComment: Comment = {
      id: 1024,
      description: 'Bwahahahahahaha!',
      postedBy: 87,
      flagScore: 0,
      eventId: 33,
      time: Date.now()
    };
    component.addComment(newComment);
    expect(component.comments).toContain(newComment);
  });

});
