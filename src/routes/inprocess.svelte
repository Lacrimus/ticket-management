<script>
    import { localDb } from "../LocalDb.svelte";
    import TicketList from "../components/organisims/TicketList.svelte";

    let tickets = [];

    localDb.on("ready", async function() {
		try {
			tickets = await localDb.tickets.where("archived").equals(0).toArray();
		} catch (error) {
			console.error((err.stack || err));
		}
	})
</script>

<TicketList {tickets} >

</TicketList>


