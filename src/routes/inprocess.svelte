<script lang="ts">
	import TicketList from "../components/organisims/TicketList.svelte";
	
	import DbConnection, { localDb } from "../indexedDb/DbConnection.ts";

    let tickets = []

    localDb.on("ready", async function() {
		try {
			//tickets = await localDb.tickets.where({done: 0, archived: 0}).toArray();
			tickets = await localDb.tickets.where("[done+archived]").equals([0,0]).toArray();
		} catch (error) {
			console.error((error.stack || error));
		}
	})

</script>

<TicketList {tickets} >

</TicketList>


