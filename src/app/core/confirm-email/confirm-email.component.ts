import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../services/cognito/cognito.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  constructor(public cognitoService: CognitoService) { }

  cognitoConfirm(form: NgForm) {
    const username: string = form.value.username;
    const code: string = form.value.code;
    this.cognitoService.cognitoConfirmSignUp(username, code);
  }

  ngOnInit() {
  }

}
