/**
 * @author Max and JeremyS
 */

import { Admin } from './admin';

export class User {

    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    reputation: number;
    picture: string;
    cognito: string;
    accountStatus: number;
    roleId: Admin;

constructor(
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    reputation: number,
    accountStatus: number,
    picture: string,
    cognito: string,
    roleId: Admin
) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.reputation = reputation;
    this.cognito = cognito;
    this.accountStatus = accountStatus;
    this.picture = picture;
    this.roleId = roleId;
}

}
