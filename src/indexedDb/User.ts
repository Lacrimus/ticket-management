import type { ITicket, IUser } from "./indexedDb";


export default class User implements IUser {	
    id: number;
	name: string;
	color: string;
    markedTickets: ITicket[]

    constructor(id: number, name: string, color: string) {
		this.id = id;
		this.name = name;
        this.color = color;
	}

    //methods
}