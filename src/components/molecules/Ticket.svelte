<script lang="ts">
    import Button, { Label, Icon } from '@smui/button';
    import CTextfield from '../atoms/CTextfield.svelte';
    import Textfield from "@smui/textfield";
    import Accordion, { Panel, Header, Content} from "@smui-extra/accordion";
    import StepList from "./StepList.svelte";
    import FloatingLabel from '@smui/floating-label';

    import type Ticket from "../../indexedDb/Ticket";

    export let ticket:Ticket;

    let disabled = true;

    function formatDate(date) {
        date = new Date()
        return date.getDate() + "." + date.getMonth()+ "." + date.getFullYear();
    }

</script>

<Panel>
  <Header>
    <Label style="display: flex; flex-wrap: wrap; align-items: center;">
      <CTextfield {disabled} bind:value={ticket.task} label="Aufgabe"></CTextfield>
      <CTextfield {disabled} bind:value={ticket.room} label="Raum"></CTextfield>
      <CTextfield {disabled} value={ticket.dueDate.toString()} label="Fälligkeitsdatum"></CTextfield>
      <div class="mdc-text-field smui-text-field--standard mdc-text-field--label-floating" style="min-width: 208px;">
        <div class="mdc-floating-label mdc-floating-label--float-above">Nummer</div>
        <p>{ticket.id}</p>
        <div class="mdc-line-ripple"></div>
      </div>
    </Label>
  </Header>
  <Content>
    <CTextfield style="width: 100%; margin-bottom: 8px;" helperLine$style="width: 100%;" textarea {disabled} bind:value="{ticket.tasklong}" label="Aufgabe"></CTextfield>
      <StepList bind:steps={ticket.steps} {disabled}></StepList>
      <div class="columns" style="margin-top: 8px; overflow: auto;">
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