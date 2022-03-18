<script>
    import Accordion, { Panel, Header, Content} from "@smui-extra/accordion";
    import { Label } from "@smui/button";
    import List, { Item, Text } from "@smui/list";
    import Ticket from "../components/molecules/Ticket.svelte";
    import TicketList from "../components/organisims/TicketList.svelte";
    import { localDb } from "../LocalDb.svelte";

    let tickets = [];

    let times = [
        {
            description: "Heute",
        },
        {
            description: "Gestern",
        },
        {
            description: "Vergangene Woche",
        },
        {
            description: "Vergangener Monat",
        },
        {
            description: "Älter",
        },

    ];

    localDb.on("ready", async function() {
        try {
            tickets = await localDb.tickets.where("archived").equals(1).toArray();
        } catch (error) {
            console.error((err.stack || err));
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
                <Label>{time.description}</Label>
            </Header>
            <Content>
                <TicketList {tickets}/>
            </Content>
        </Panel> 
    {/each}
</Accordion>