<script lang="ts">
    import { Icon, Label } from "@smui/common";  
    import Textfield from "@smui/textfield";
    import Button from "@smui/button";
    import Accordion, { Panel, Header, Content} from "@smui-extra/accordion";
    import StepList from "./StepList.svelte";

    import type Ticket from "../../indexedDb/Ticket";

    export let ticket: Ticket;

    let disabled = true;

    function formatDate(date) {
        date = new Date()
        return date.getDate() + "." + date.getMonth()+ "." + date.getFullYear();
    }

</script>

<Panel>
  <Header>
    <Label style="display: flex; flex-wrap: wrap; align-items: center;">
      <Textfield {disabled} bind:value={ticket.task} label="Aufgabe"></Textfield>
      <Textfield {disabled} bind:value={ticket.room} label="Raum"></Textfield>
      <Textfield {disabled} value={ticket.duedate.toString()} label="Fälligkeitsdatum"></Textfield>
    </Label>
  </Header>
  <Content>
    <Textfield style="width: 100%; margin-bottom: 8px;" helperLine$style="width: 100%;" textarea {disabled} bind:value="{ticket.tasklong}" label="Aufgabe"></Textfield>
      <StepList bind:steps={ticket.steps} {disabled}></StepList>
      <div class="columns" style="margin-top: 8px;">
        <Button on:click={()=>{}} touch >
          <Icon class="material-icons">control_point</Icon>
          <Label>Schritt hinzufügen</Label>
        </Button>
        <Button on:click={()=>{}} touch variant="outlined" style="float:right">
          <Icon class="material-icons">edit</Icon>
          <Label>Editieren</Label>
        </Button>
      </div>
  </Content>
</Panel>