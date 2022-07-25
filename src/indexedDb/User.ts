import type Ticket from "./Ticket";
import type Email from "./DbConnection";


export default class User {	
    id: number;
	name: string;
    mail: Email;
	color: string;
    markedTickets: Ticket[];

    constructor(id: number, name: string, color: string) {
		this.id = id;
		this.name = name;
        this.color = color;
	}

    //methods
}