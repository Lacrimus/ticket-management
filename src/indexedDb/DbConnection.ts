import Dexie, { type Middleware } from "dexie";

export default class DbConnection extends Dexie {

    tickets!: Dexie.Table<ITicket, number>
    users!: Dexie.Table<IUser, number>

    constructor() {
        super("IndexedDb");
    
    this.version(1).stores({
        tickets: "++id, task, tasklong, steps, [done+archived], creationDate, author, room, dueDate",
        users: "++id, name, mail, color, markedTickets",
    });

    }
}

export const localDb = new DbConnection();

 /**
  * None of these properties may be of type boolean! It is not a valid key in an IndexedDB.
  * Reference: https://www.w3.org/TR/IndexedDB/#dfn-valid-key
  */

export interface ITicket {
	id: number;
	task: string;
	description: string;
	steps: IStep[];
    done: booleanNumber;
	archived: booleanNumber;
	creationDate: Date;
	author: string;
	room: string;
	dueDate: Date | string;
}

export interface IStep {
	description : string;
	checked : booleanNumber;
}

export interface IUser {
    id: number;
	name: string;
    mail: email;
	color: string;
    markedTickets: ITicket[]
}

/**
 * Sadly, this is needed for storing booleans as 1 or 0 due to IndexedDB.
 */

export type booleanNumber = 1 | 0;

export type email = `${string}@${string}.${string}`;