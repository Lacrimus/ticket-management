<script>
    import Drawer, { Header, Title, Subtitle, Content, AppContent, Scrim} from "@smui/drawer";
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import List, { Item, Text } from "@smui/list";
	import { settings } from '../../stores.js';
    import { drawer } from '../../stores.js';

    let open;

    drawer.subscribe(value => {
		open = value;
	});

</script>

<style>
    .drawer-container {
        position: relative;
        display: flex;
        height:100%;
        overflow: hidden;
        z-index: 1;
  }
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
 
  .main-content {
    overflow: auto;

    height: 100%;
    box-sizing: border-box;
  }
</style>

<div class="drawer-container">
    <Drawer variant="modal" fixed={false} bind:open>
        <Header>
            <Title>Account</Title>
            <Subtitle>Mail@mail.de</Subtitle>
        </Header>
        <Header>
            <Title>Einstellungen</Title>
        </Header>
        <Content>
            <List>
                <Item>
                    <FormField align="end">
                        <Checkbox bind:checked={settings.darkmode} />
                        <span slot="label">Darkmode</span>
                    </FormField>
                </Item>
            </List>
        </Content>
    </Drawer>
    <Scrim fixed={false} />
    <AppContent class="app-content">
        <main class="main-content">
            <slot></slot>
        </main>
    </AppContent>
  </div>