<script>
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import { drawer } from '../../stores.js';

    let drawerOpen;

    drawer.subscribe(value => {
        drawerOpen = value;
    });

</script>

<TopAppBar variant="static" dense={true}>
      <Row>
        <Section toolbar>
            <Title>LSG Ticket</Title>
        </Section>
        <Section align="end">
            <IconButton on:click="{() => {drawer.set(!drawerOpen)}}" class="material-icons">menu</IconButton>
        </Section>
      </Row>
</TopAppBar>



