<script lang="ts">
    import IconButton from "@smui/icon-button";
    import FormField from "@smui/form-field";
    import CCheckbox from "../atoms/CCheckbox.svelte";
    import CTextfield from "../atoms/CTextfield.svelte";
    import type { Step } from "../../indexedDb/Ticket";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let steps: Step[] | null = null;
    export let disabled = false;

</script>

{#each steps as step, i}
    <FormField>
        <CCheckbox on:click={() => {dispatch("check", i)}} bind:checked={step.checked}/>
        <CTextfield {disabled} bind:value={step.description} label="Schritt {i++}">
            <div style="display:inline-flex;" slot="trailingIcon">
                <IconButton on:click={() => {step.description = null}} class="material-icons" touch size="button">clear</IconButton>
                <IconButton on:click={() => {steps.splice(i, 1); steps = steps}} class="material-icons" touch size="button">remove_circle_outline</IconButton>
            </div>        
        </CTextfield>
    </FormField>
{/each}