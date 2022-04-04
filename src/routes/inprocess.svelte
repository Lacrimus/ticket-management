<script lang="ts">
	import Alert from "../components/atoms/Alert.svelte";
	import Chip, { Set, Text } from '@smui/chips';
	import TicketList from "../components/organisims/TicketList.svelte";
	
	import DbConnection, { localDb } from "../indexedDb/DbConnection.ts";

    let tickets = []

    localDb.on("ready", async function() {
		try {
			tickets = await localDb.tickets.where("[done+archived]").equals([0,0]).toArray();
		} catch (error) {
			console.error((error.stack || error));
		}
	})


	let mergeconflicts = 0;

</script>

{#if mergeconflicts !=0}
	<Alert message="Ticket(s) mit Inhaltskonflikten:">
		<Set chips={tickets} let:chip>
			<Chip chip={chip.id}>
				<Text tabindex={0}>Nr.{chip.id}</Text>
			</Chip>
		</Set>
	</Alert>
{/if}

<TicketList {tickets} >

</TicketList>
