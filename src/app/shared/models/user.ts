export class User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    reputation: string;
    flagScore: number;
    accountStatus: string; //FK
    photoUrl: string;
    // cognitoStuff: ???
}
