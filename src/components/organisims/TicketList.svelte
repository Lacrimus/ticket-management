<script>
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';

    import Ticket from "../molecules/Ticket.svelte"

    export let tickets = []
</script>

<style>

</style>

<Accordion multiple>
    {#each tickets as ticket}
	<div class="m-2">
		<Ticket {ticket} ></Ticket>>
	</div>
    {/each}
</Accordion>