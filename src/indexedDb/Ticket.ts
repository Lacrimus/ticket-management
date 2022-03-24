import type { booleanNumber, ITicket, IStep} from "./DbConnection";

 /**
  * None of these properties may be of type boolean! It is not a valid key in an IndexedDB.
  * Reference: https://www.w3.org/TR/IndexedDB/#dfn-valid-key
  */

export default class Ticket implements ITicket {	
	id: number;
	task: string;
	description: string;
	steps: Step[];
	archived: booleanNumber;
	creationDate: Date;
	author: string;
	room:  string;
	dueDate: Date | string;

	constructor(task: string, description: string, room?: string, dueDate?: Date | string, steps?: Step[]) {
		this.id = this.determineNextId();
		this.task = task;
		this.description = description;
		this.steps = (steps == undefined) ? [] : steps;
		this.archived = 0;
		this.creationDate = new Date();
		this.author = this.determineAuthor();
		this.room = room;
		this.dueDate = dueDate;
	}

	static getProto(): Ticket {
		return new Ticket(null, null, null, null, []);
	}

	static newFromProto(proto: Ticket): Ticket {
		return new Ticket(proto.task, proto.description, proto.room, proto.dueDate, proto.steps)
	}

	addProtoStep(){
		this.steps.push(new Step(null));
	}

	determineNextId(): number {
		let id =  Math.floor((Math.random() * 1000) + 1); 
		return id;
	}

	determineAuthor(): string {
		let author = "TestAuthor"
		return author;
	}
}

export class Step implements IStep {
	description : string;
	checked : booleanNumber;


	constructor(desc:string) {
		this.description = desc;
		this.checked = 0;
	}
}