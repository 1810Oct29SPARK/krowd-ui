import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
    user = {
        name: 'Emily'
    };

    getUser(){
        return this.user;
    }
}