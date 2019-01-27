export class User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    reputation: number;
    flagScore: number;
    accountStatus: number; // FK

    photoUrl: string;
    // cognitoStuff: ???

    constructor(
        id: number,
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        reputation: number,
        flagScore: number,
        accountStatus: number,
        photoUrl: string
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
    }
}
