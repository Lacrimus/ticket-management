import type Ticket from "./Ticket";
import type  User  from "./User";
import Dexie, { type Middleware } from "dexie";

export default class DbConnection extends Dexie {

    tickets!: Dexie.Table<Ticket, number>
    remoteTickets!: Dexie.Table<Ticket, number>
    users!: Dexie.Table<User, number>

    constructor() {
        super("IndexedDb");
    
    this.version(1).stores({
        tickets: "id, task, tasklong, steps, [done+archived], creationDate, author, room, dueDate",
        remoteTickets: "id, task, tasklong, steps, [done+archived], creationDate, author, room, dueDate",
        users: "id, name, mail, color, markedTickets",
    });

    }

    sync() {
        let remote;

        let headers = new Headers();

        headers.set("Content-Type", "application/json");

        const request = new Request("http://0.0.0.0:80/tickets/", {
            method: "GET",
            headers: headers,
            mode: 'cors',
        });

        fetch(request).then(response => {
            let contentType = response.headers.get("content-type");
            if (!contentType.includes("application/json")) {
                throw new TypeError("Response not in JSON format.");
              }
              return response.json();
        }).then(data => {
            //console.log(data);
            remote = data;
        });
        localDb.remoteTickets.bulkPut(remote);
    }
}

export const localDb = new DbConnection();

/**
 * Sadly, this is needed for storing booleans as 1 or 0 due to IndexedDB.
 */

export type booleanNumber = 1 | 0;

export type Email = `${string}@${string}.${string}`;