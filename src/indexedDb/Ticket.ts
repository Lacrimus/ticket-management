import type { BooleanNumber, ITicket } from "./indexedDb";

 /**
  * None of these properties may be of type boolean! It is not a valid key in an IndexedDB.
  * Reference: https://www.w3.org/TR/IndexedDB/#dfn-valid-key
  */

export class Ticket implements ITicket {	
	id: number;
	task: string;
	tasklong: string;
	steps: [
		{
			description : string;
			checked : BooleanNumber;
		}
	];
	archived: BooleanNumber;
	creationDate: Date;
	author: string;
	room:  string;
	dueDate: Date | string;

	constructor(task: string, room?: string, dueDate?: Date | string) {
		this.id = this.determineNextId();
		this.task = task;
		this.creationDate = new Date();
		this.author = this.determineAuthor();
		this.archived = 0;
		this.room = (room !== "" || typeof(dueDate) == "undefined") ? room : "/"
		this.dueDate = (dueDate !== "" || typeof(dueDate) == "undefined") ? dueDate : "Nie";
	}

	static proto() {
		return new Ticket("");
	}

	determineNextId() {
		let id =  Math.floor((Math.random() * 1000) + 1); 
		return id;
	}

	determineAuthor() {
		let author = "TestAuthor"
		return author;
	}
}