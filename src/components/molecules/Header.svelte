<script>
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton, { Icon } from "@smui/icon-button";
    import { drawer } from '../../stores.js';

    let drawerOpen;

    drawer.subscribe(value => {
        drawerOpen = value;
    });

    function sync() {

    }

</script>

<TopAppBar variant="static" dense={true}>
      <Row>
        <Section toolbar>
            <Title>LSG Ticket</Title>
        </Section>
        <Section align="end">
            <Icon class="material-icons" style="display:none={true}">warning_amber</Icon>
            <IconButton on:click="{() => sync}" class="material-icons">sync</IconButton>
            <IconButton on:click="{() => {drawer.set(!drawerOpen)}}" class="material-icons">menu</IconButton>
        </Section>
      </Row>
</TopAppBar>


