<script lang="ts">
    import Button, { Label, Icon } from "@smui/button";
    import IconButton from "@smui/icon-button";
    import Textfield from "@smui/textfield";
    import { Separator } from "@smui/list"
    import FormField from "@smui/form-field";
    import Snackbar from '@smui/snackbar';
    import type { SnackbarComponentDev } from '@smui/snackbar';

    import Ticket from "../indexedDb/Ticket.ts";
    import { localDb } from "../indexedDb/DbConnection.ts";

    let input:Ticket = Ticket.getProto();

    let messages:String[] = [];

    let snackbar: SnackbarComponentDev;

    function addTicket() {
        let noStepDesc = false;
        messages = [];

        if(input.room == null) {
            messages.push("Kein Raum angegeben. Feld bleibt leer.");
        }

        if(input.dueDate == null) {
            messages.push("Kein Ablaufdatum angegeben. Setze auf \"Nie\".");
        }

        if(input.task == null) {
            messages.push("Jedes Ticket benötigt eine Aufgabe!");
            snackbar.open();
            return;
        }

        for (let i = 0; i < input.steps.length; i++) {
            if(input.steps[i].description == null) {
				input.steps.splice(i, 1);
                i--;
                noStepDesc = true;
			}
        };

        if(noStepDesc) {
            messages.push("Entferne Schritte ohne Beschreibung...");
            snackbar.open();
        }

        if(messages.length != 0) {
            snackbar.open()
        }

        localDb.tickets.add(Ticket.newFromProto(input)).catch(Error, function (error) {
			console.error ("Error at adding ticket." + error.name + ":" + error.getMessage())
		});

        input = Ticket.getProto();
    }
    
</script>

<Label style="display: flex; flex-wrap: wrap; align-items: center; margin-bottom:16px;">
    <Textfield bind:value={input.task} label="Aufgabe">
        <IconButton on:click={() => {input.task = null}} class="material-icons" slot="trailingIcon" touch size="button">clear</IconButton>
    </Textfield>
    <Textfield bind:value={input.room} label="Raum">
        <IconButton on:click={() => {input.room = null}} class="material-icons" slot="trailingIcon" touch size="button">clear</IconButton>
    </Textfield>
    <Textfield bind:value={input.dueDate} label="Fälligkeitsdatum">
        <IconButton on:click={() => {input.dueDate = null}} class="material-icons" slot="trailingIcon" touch size="button">clear</IconButton>
    </Textfield>
</Label>
<Textfield style="width: 100%; min-height:20px; margin-bottom: 8px;" helperLine$style="width: 100%;" textarea bind:value="{input.description}" label="Beschreibung"></Textfield>

{#each input.steps as step, i}
    <FormField>
        <Textfield bind:value={step.description} label="Schritt {i+1}">
            <div style="display:inline-flex;" slot="trailingIcon">
                <IconButton on:click={() => {step.description = null}} class="material-icons" touch size="button">clear</IconButton>
                <IconButton on:click={() => {input.steps.splice(i, 1); input.steps = input.steps}} class="material-icons" touch size="button">remove_circle_outline</IconButton>
            </div>
        </Textfield>
    </FormField>
{/each}

<div class="columns" style="margin-top: 8px; overflow: auto;">
    <Button on:click={()=>{input.addProtoStep(); input.steps = input.steps}} touch >
        <Icon class="material-icons">control_point</Icon>
        <Label>Schritt hinzufügen</Label>
    </Button>
</div>

<Separator style="margin-bottom: 16px;"/>

<Button on:click={addTicket} variant="unelevated">
    <Icon class="material-icons">add</Icon>
    <Label>Ticket hinzufügen</Label>
</Button>

<Snackbar bind:this={snackbar} variant="stacked">
    {#each messages as message}
        <Label>{message}</Label>
    {/each}
</Snackbar>
