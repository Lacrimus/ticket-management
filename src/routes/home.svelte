<script>
    import Paper, { Title, Content } from "@smui/paper";
    import List, { Item, Separator, Text } from "@smui/list";
    import { localDb } from "../indexedDb/DbConnection.ts";

    let stats = {}

    //Todo: calculate date difference (new: 1 day ago, soondue: 1 day until due) // todo:fix date calculation
    localDb.on("ready", async function() {
		try {
                stats.recent = await localDb.tickets.where("creationDate").aboveOrEqual(Date.now() - new Date(0, 0, 1)).count(),
                stats.current = await localDb.tickets.where("[done+archived]").equals([0,0]).count(),
                stats.soondue = await localDb.tickets.where("dueDate").aboveOrEqual(Date.now() - new Date(0, 0, 1)).count()
		} catch (error) {
			console.error((error.stack || error));
		}
	})
</script>

<h2>Übersicht</h2>

<Paper color="primary" variant="outlined">
    <Title></Title>
    <Separator/>
    <Content></Content>
</Paper>

<Paper color="secondary" variant="outlined" style="margin-top:16px">
    <Title>Statistik</Title>
    <Separator/>
    <Content>
        <List nonInteractive>
            <Item>
                <Text>Neue Tickets: {stats.recent}</Text>
            </Item>    
            <Item>
                <Text>Offene Tickets: {stats.current}</Text>
            </Item>
            <Item>
                <Text>Bald Fällig: {stats.soondue}</Text>
            </Item>
          </List>
    </Content>
</Paper>

