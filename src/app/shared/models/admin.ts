export class Admin {

    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    // cognitoStuff: ???

    constructor(
        id: number,
        username: string,
        firstname: string,
        lastname: string,
        email: string
    ) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

}
