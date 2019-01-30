/**
 * @author Max and JeremyS
 */

import { Category } from './category';
import { User } from './user';


export class Event {

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
    }

}
