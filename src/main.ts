import "../build/smui.css"
import "../build/smui-dark.css"
import 'material-icons/iconfont/material-icons.css';
import App from "./App.svelte";
import Ticket, { Step } from "./indexedDb/Ticket";
import User from "./indexedDb/User";
import DbConnection, { localDb } from "./indexedDb/DbConnection";

const app = new App({
	target: document.body,
	props: {
		name: "world"
	}
});

export default app;


localDb.tickets.mapToClass(Ticket);
localDb.remoteTickets.mapToClass(Ticket);
localDb.users.mapToClass(User);

/*DEBUGGING START*/

let demousersIn:User[] = [new User(0, "BHG", "#76ae97"), new User(1, "STO", "#6292ba")]

let demoticketsIn:Ticket[] = [
	new Ticket( 
		"Austausch Whiteboard",
		"Altes Whiteboard durch neues Modell ersetzen.",
		"4.101",
		new Date(2022, 3, 26)
	),	
	new Ticket(
		"Reparatur Beamer",
		"EPSON Projektor, Überhitzt ständig, Abmontieren und Entstauben",
		"2.102",
		new Date(2023, 6, 6)
	)
];

[
	"Anlieferung durch Legamaster", 
	"Demontage altes Board",
	"Neues Board anbringen",
	"Altes Board ins Lab zur Wiederverwertung"
].forEach((value) => {demoticketsIn[0].steps.push(new Step(value))});

[
	"Kauf Druckluftreiniger",
	"Abmonieren und gründlich im Lab reinigen",
	"Wiederanschrauben im Klassenzimmer"
].forEach((value) => {demoticketsIn[1].steps.push(new Step(value))});

localDb.users.count().then(function(count) {
	if(count < 1) {
		localDb.users.bulkPut(demousersIn).then(function() {
			console.log("Done putting demousers");
		}).catch(DbConnection.BulkError, function (error) {
			console.error ("(Partial) error at putting users")
		});
	}
})

localDb.tickets.count().then(function(count) {
	if(count < 1) {
		localDb.tickets.bulkPut(demoticketsIn).then(function() {
			console.log("Done putting demotickets");
		}).catch(DbConnection.BulkError, function (error) {
			console.error ("(Partial) error at putting tickets")
		});	
	}
})

/*DEBUGGING END*/