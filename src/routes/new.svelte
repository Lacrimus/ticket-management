<script lang="ts">
    import Button, { Label, Icon } from "@smui/button";
    import IconButton from "@smui/icon-button";
    import Textfield from "@smui/textfield";
    import { Separator } from "@smui/list"
    import Accordion, { Panel, Header, Content} from "@smui-extra/accordion";
    import FloatingLabel from "@smui/floating-label";
    import Checkbox from "@smui/checkbox";
    import FormField from "@smui/form-field";

    import { Ticket } from "../indexedDb/Ticket.ts";

    let ticket:Ticket

    let temp = {
        id: "",
        task: "",
        tasklong: "",
        steps: [
            {
                description : "",
                checked : 0,
		    }
        ],
        archived: 0,
        room:  "",
        dueDate: "",

    }
    
</script>

<Label style="display: flex; flex-wrap: wrap; align-items: center; margin-bottom:16px;">
    <Textfield bind:value={temp.task} label="Aufgabe">
        <IconButton on:click={() => {temp.task = ""}} class="material-icons" slot="trailingIcon" touch size="button">clear</IconButton>
    </Textfield>
    <Textfield bind:value={temp.room} label="Raum">
        <IconButton on:click={() => {temp.room = ""}} class="material-icons" slot="trailingIcon" touch size="button">clear</IconButton>
    </Textfield>
    <Textfield bind:value={temp.dueDate} label="Fälligkeitsdatum">
        <IconButton on:click={() => {temp.dueDate = ""}} class="material-icons" slot="trailingIcon" touch size="button">clear</IconButton>
    </Textfield>
    <div class="mdc-text-field smui-text-field--standard mdc-text-field--label-floating" style="min-width: 208px;">
        <div class="mdc-floating-label mdc-floating-label--float-above">Nummer</div>
        <p>{temp.id}</p>
        <div class="mdc-line-ripple"></div>
    </div>
</Label>
<Textfield style="width: 100%; min-height:20px; margin-bottom: 8px;" helperLine$style="width: 100%;" textarea bind:value="{temp.tasklong}" label="Aufgabe"></Textfield>
{#each temp.steps as step, i}
    <FormField>
        <Textfield value="{step.description}" label="Schritt {i+1}">
            <IconButton on:click={() => {/*remove step*/}} class="material-icons" slot="trailingIcon" touch size="button">clear</IconButton>
        </Textfield>
    </FormField>
{/each}
<div class="columns" style="margin-top: 8px; overflow: auto;">
    <Button on:click={()=>{}} touch >
        <Icon class="material-icons">control_point</Icon>
        <Label>Schritt hinzufügen</Label>
    </Button>
</div>

<Separator style="margin-bottom: 16px;"/>

<Button variant="unelevated">
    <Icon class="material-icons">add</Icon>
    <Label>Ticket hinzufügen</Label>
</Button>
