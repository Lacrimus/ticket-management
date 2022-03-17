import Dexie, { type Middleware } from 'dexie';

class TMDatabase extends Dexie {
    tickets: Dexie.Table<ITicket, number>
    users: Dexie.Table<IUser, number>

    constructor() {
        super("TMDatabase");
    

    this.version(1).stores({
        tickets: '++id, task, tasklong, steps, archived, creationDate, author, room, dueDate',
        users: '++id, name, color, markedTickets',
    });

    }
}

 /**
  * None of these properties may be of type boolean! It is not a valid key in an IndexedDB.
  * Reference: https://www.w3.org/TR/IndexedDB/#dfn-valid-key
  */

export interface ITicket {
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
	room: string;
	dueDate: Date | "Nie";
}

export interface IUser {
    id: number;
	name: string;
	color: string;
    markedTickets: ITicket[]
}

/**
 * Sadly, this is needed for storing booleans as 1 or 0 due to IndexedDB.
 */

 export type BooleanNumber = 1 | 0;