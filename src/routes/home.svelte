<script>
    import Paper, { Title, Content } from "@smui/paper";
    import List, { Item, Separator, Text } from "@smui/list";
    export let user;

    let stat = {
        new : 2,
        open : 2,
        soondue : 1
    };

</script>

<style>

</style>

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
                <Text>Neue Tickets: {stat.new}</Text>
            </Item>    
            <Item>
                <Text>Offene Tickets: {stat.open}</Text>
            </Item>
            <Item>
                <Text>Bald Fällig: {stat.soondue}</Text>
            </Item>
          </List>
    </Content>
</Paper>
