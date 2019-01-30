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
    flagScore: number;
    photoUrl: string;
    cognitoStuff: string;
    accountStatus: number;
    roleId: Admin;

constructor(
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    reputation: number,
    flagScore: number,
    accountStatus: number,
    photoUrl: string,
    roleId: Admin
) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.reputation = reputation;
    this.flagScore = flagScore;
    this.accountStatus = accountStatus;
    this.photoUrl = photoUrl;
    this.roleId = roleId;
}

}
