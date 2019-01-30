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
    score: number;
    flag: number;
    userId: User;
    categoryId: Category;

    constructor(
        id: number,
        name: string,
        description: string,
        picture: string,
        date: Date,
        address: string,
        score: number,
        flag: number,
        userId: User,
        categoryId: Category,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryId = categoryId;
        this.date = date;
        this.address = address;
        this.score = score;
        this.flag = flag;
        this.userId = userId;
        this.picture = picture;
    }

}
