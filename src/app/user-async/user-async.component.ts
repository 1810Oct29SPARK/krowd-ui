import { Component, OnInit } from '@angular/core';
import { UserAsyncService } from './user-async.service';

@Component({
  selector: 'app-user-async',
  templateUrl: './user-async.component.html',
  styleUrls: ['./user-async.component.css'],
  providers: [UserAsyncService]
})
export class UserAsyncComponent implements OnInit {
  isLoggedIn = false;
  user: { name: string };
  userDetail: any;
  systemError = false;
  systemErrorMessage = '';

  constructor(private userAsyncService: UserAsyncService) { }

  ngOnInit() {
    this.userAsyncService = this.userAsyncService.getUserDetails().subscribe(
      (response: string) => {
        this.userDetail = response;
        this.isLoggedIn = true;
      },
      (error: string) => {
        this.systemError = true;
        this.systemErrorMessage = error;
      }
    );
  }

}
