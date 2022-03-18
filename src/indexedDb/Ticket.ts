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
	dueDate: Date | "Nie";

	constructor(task: string, author: string) {
		this.id = this.dertermineNextId();
		this.task = task;
		this.creationDate = new Date();
		this.author = author;
		this.archived = 0;
		this.room = "/"
		this.dueDate = "Nie";
	}

	dertermineNextId() {
		let id =  Math.floor((Math.random() * 1000) + 1); 
		return id;
	}
}