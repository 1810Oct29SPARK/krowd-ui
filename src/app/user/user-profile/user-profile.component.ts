import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
<<<<<<< HEAD
export class UserProfileComponent {
=======
export class UserProfileComponent implements OnInit {

  response: any = null;

  constructor() { }

  ngOnInit() {
  }
>>>>>>> 9d9e25a88f69b7a1409effadf97073d8b05bbe25

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}
