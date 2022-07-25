<script lang="ts">
    import Button, { Label, Icon } from "@smui/button";
    import CTextfield from "../atoms/CTextfield.svelte";
    import { Header, Content} from "@smui-extra/accordion";
    import StepList from "./StepList.svelte";
    import Snackbar from "@smui/snackbar";
    import type { SnackbarComponentDev } from "@smui/snackbar";
    import { localDb } from "../../indexedDb/DbConnection.ts";
    import { createEventDispatcher } from "svelte";
    import type Ticket from "../../indexedDb/Ticket";

    export let ticket:Ticket;

    const dispatch = createEventDispatcher();


    let editing = false;

    let messages:String[] = [];

    let snackbar: SnackbarComponentDev;

    function applyEdit() {
      let noStepDesc = false;;
      for (let i = 0; i < ticket.steps.length; i++) {
        if(ticket.steps[i].description == null) {
				  ticket.steps.splice(i, 1);
          noStepDesc = true;
          i--;
		  	}
      };

      /*
      if(noStepDesc) {
            //BUG: does not render
            messages.push("Entferne Schritte ohne Beschreibung...");
            snackbar.open();
      }
      */

      /**
       * Non-ideal solution as the entire object is overwritten. 
       * Perhaps only update the properties that have changed?
      */
      localDb.tickets.put(ticket, ticket.id);

      /* 
      //Update each properties individually and by demand.
      edits.forEach(edit => {
        localDb.tickets.update(ticket.id, { [edit.property]: edit.value }).then(function (updated) {
        if (updated) {

          }
		    });
      });
      */

      // Make changes reactive
      ticket = ticket;
    }

    function applyCheck(event) {
      localDb.tickets.where({ id : ticket.id }).modify(function(entry) {
        entry.steps[event.detail].checked = ticket.steps[event.detail].checked;
      })
    }

    function applyFiling(done) {
      localDb.tickets.where({ id : ticket.id }).modify(function(entry) {
        entry.done = done;
      })
      dispatch("delete", {locally: true, id: ticket.id});
    }

</script>

<Header>
  <Label style="display: flex; flex-wrap: wrap; align-items: center;">
    <CTextfield disabled={!editing} bind:value={ticket.task} label="Aufgabe"></CTextfield>
    <CTextfield disabled={!editing} bind:value={ticket.room} label="Raum"></CTextfield>
    <CTextfield disabled={!editing} value={ticket.dueDate.toString()} label="Fälligkeitsdatum"></CTextfield>
    <div class="mdc-text-field smui-text-field--standard mdc-text-field--label-floating" style="min-width: 208px;">
      <div class="mdc-floating-label mdc-floating-label--float-above">Nummer</div>
      <p>{ticket.id}</p>
      <div class="mdc-line-ripple"></div>
    </div>
  </Label>
</Header>
<Content>
  {#if editing}
    <Button on:click={() => { dispatch("delete", {db: true, locally: true, id: ticket.id}); }} style="float:right; margin-bottom:16px">Ticket Löschen</Button>
  {/if}
  <CTextfield textarea disabled={!editing} bind:value={ticket.description} label="Beschreibung" style="width: 100%; margin-bottom: 8px;" helperLine$style="width: 100%;"></CTextfield>
  <StepList on:check={applyCheck} bind:steps={ticket.steps} disabled={!editing}></StepList>
  {#if !ticket.archived}
    <div class="columns" style="margin-top: 8px; overflow: auto;">
      {#if editing}
        <Button on:click={() => { ticket.addProtoStep(); ticket.steps = ticket.steps; }} touch >
          <Icon class="material-icons">control_point</Icon>
          <Label>Schritt hinzufügen</Label>
        </Button>
      {:else} 
        {#if ticket.done}
          <Button on:click={() => { applyFiling(0) }} touch >
            <Icon class="material-icons">restart_alt</Icon>
            <Label>Wiederaufnehmen</Label>
          </Button>
        {:else}
          {#if ticket.steps.every((step) => { return step.checked == 1; }) || ticket.steps.length == 0}
          <Button on:click={() => { applyFiling(1) }} touch >
            <Icon class="material-icons">done</Icon>
            <Label>Abheften</Label>
          </Button>
          {/if}
        {/if}
      {/if}
      <Button on:click={() => { editing = !editing; if(!editing) { applyEdit() }; }} touch variant="outlined" style="float:right">
        <Icon class="material-icons">edit</Icon>
        <Label>
          {#if editing}
            Editieren beenden
          {:else}
            Editieren  
          {/if}
        </Label>
      </Button>
    </div>  
  {/if}
</Content>

<Snackbar bind:this={snackbar} variant="stacked">
  {#each messages as message}
      <Label>{message}</Label>
  {/each}
</Snackbar>
