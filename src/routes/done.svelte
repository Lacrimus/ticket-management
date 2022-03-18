<script>
    import TicketList from "../components/organisims/TicketList.svelte";
	import SwipeList from "../components/molecules/SwipeList.svelte"
	import { localDb } from "../LocalDb.svelte";

	let tickets = [];
	
	localDb.on("ready", async function() {
		try {
			tickets = await localDb.tickets.where("archived").equals(0).toArray();

		} catch (error) {
			console.error((err.stack || err));
		}
	})

</script>

<style>

</style>

<SwipeList swipes = {tickets}>

</SwipeList>

<TicketList {tickets}/>


