<script>
    import Accordion, { Panel } from '@smui-extra/accordion';

    import Ticket from "../molecules/Ticket.svelte"
    import { localDb } from "../../indexedDb/DbConnection.ts";

    export let tickets;

    function deleteTicket(event) {
        if(event.detail.db) {
            localDb.tickets.where({id: event.detail.id}).delete();
        }
        if(event.detail.locally) {
            for(let i = 0; i < tickets.length; i++) {
                if(tickets[i].id == event.detail.id) {
                    tickets.splice(i, 1);
                    break;
                }
            }
            // Make changes reactive
            tickets = tickets;
        }
    }

</script>

<style>

</style>

<Accordion multiple style="max-width:1000px">
    {#each tickets as ticket}
        <Panel>
            <Ticket on:delete={deleteTicket} {ticket} ></Ticket>
        </Panel>
    {/each}
</Accordion>