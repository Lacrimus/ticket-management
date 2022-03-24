<script lang="ts">
    import Accordion, { Panel, Header, Content} from "@smui-extra/accordion";
    import { Label } from "@smui/button";
    import List, { Item, Text } from "@smui/list";
    import Ticket from "../components/molecules/Ticket.svelte";
    import TicketList from "../components/organisims/TicketList.svelte";
    	
    import DbConnection, { localDb } from "../indexedDb/DbConnection.ts";

    let tickets = [];

    let times = ["Heute", "Gestern", "Vergangene Woche", "Vergangener Monat","Älter"];

    localDb.on("ready", async function() {
        try {
            tickets = await localDb.tickets.where("[done+archived]").equals([0,0]).or().equals([1,0]).toArray();
        } catch (error) {
            console.error((error.stack || error));
        }
	})

</script>

<style>

</style>

<h2>Archiv</h2>

<Accordion multiple>
    {#each times as time}
        <Panel>
            <Header>
                <Label>{time}</Label>
            </Header>
            <Content>
                <TicketList {tickets}/>
            </Content>
        </Panel> 
    {/each}
</Accordion>