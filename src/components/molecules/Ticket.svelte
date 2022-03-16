<script lang="ts">
    import Accordion, { Panel, Header, Content} from '@smui-extra/accordion';
    //import Card, {Content, PrimaryAction, Media, MediaContent} from '@smui/card';
    export let ticket = {};

    let goalInput;

    function addGoal() {
        if(goalInput.value == "") { 
        } else {
            ticket.goals.push({description : goalInput.value});
            goalInput.value = "";
        }
    };

    function formatDate(date) {
        date = new Date()
        return date.getDate() + "." + date.getMonth()+ "." + date.getFullYear();
    }

</script>

<style>

</style>


<Accordion multiple>
    <Panel>
        <Header>Panel 1</Header>
        <Content>
          The content for panel 1.
          <ul>
            <li>Some</li>
            <li>List</li>
            <li>Items</li>
          </ul>
        </Content>
      </Panel>
</Accordion>