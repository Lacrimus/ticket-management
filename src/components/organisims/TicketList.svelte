<script>
    import Accordion, { Panel } from '@smui-extra/accordion';

    import Ticket from "../molecules/Ticket.svelte"

    export let tickets;

</script>

<style>

</style>

<Accordion multiple>
    {#each tickets as ticket}
        <Panel>
            <Ticket {ticket} ></Ticket>
        </Panel>
    {/each}
</Accordion>