<script lang="ts">
	import TicketList from "../components/organisims/TicketList.svelte";
	
	import DbConnection, { localDb } from "../indexedDb/DbConnection.ts";

    let tickets = []

    localDb.on("ready", async function() {
		try {
			tickets = await localDb.tickets.where("archived").equals(0).toArray();
		} catch (error) {
			console.error((error.stack || error));
		}
	})

</script>

<TicketList {tickets} >

</TicketList>


