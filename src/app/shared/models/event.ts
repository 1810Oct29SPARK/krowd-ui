/**
 * @author Max and JeremyS
 */

import { Category } from './category';
import { User } from './user';


export class Event {

<<<<<<< HEAD
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
=======
    id: number;
    name: string;
    description: string;
    picture: string;
    date: Date;
    address: string;
    ratingScore: number;
    flag: number;
    hostId: User;
    category: Category;

    constructor(
        id: number,
        name: string,
        description: string,
        picture: string,
        date: Date,
        address: string,
        ratingScore: number,
        flag: number,
        hostId: User,
        category: Category,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.date = date;
        this.address = address;
        this.ratingScore = ratingScore;
        this.flag = flag;
        this.hostId = hostId;
        this.picture = picture;
>>>>>>> 0c87891fcd16f721e3de36af9fb2b36155d79f7b
    }

}
