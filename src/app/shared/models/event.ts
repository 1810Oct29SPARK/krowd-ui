export class Event {

    eventID: number;
    eventName: string;
    eventCategory: number;
    eventDate: string;
    eventAddress: string;
    eventApartment: string;
    eventCity: string;
    eventState: string;
    eventZip: number;
    eventDescription: string;
    eventFlag: string;
    userID: string;
    eventPhotoID: string;

    constructor(
        eventID: number,
        eventName: string,
        eventCategory: number,
        eventDate: string,
        eventAddress: string,
        eventApartment: string,
        eventCity: string,
        eventState: string,
        eventZip: number,
        eventDescription: string,
        eventFlag: string,
        userID: string,
        eventPhotoID: string,
    ) {
        this.eventID = eventID;
        this.eventName = eventName;
        this.eventCategory = eventCategory;
        this.eventDate = eventDate;
        this.eventAddress = eventAddress;
        this.eventApartment = eventApartment;
        this.eventCity = eventCity,
        this.eventState = eventState,
        this.eventZip = eventZip;
        this.eventDescription = eventDescription;
        this.eventFlag = eventFlag;
        this.userID = userID;
        this.eventPhotoID = eventPhotoID;
    }

}
