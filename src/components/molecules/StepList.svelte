<script lang="ts">
    import { Icon, Label } from "@smui/common";  
    import Button from "@smui/button";
    import Checkbox from "@smui/checkbox";
    import FormField from "@smui/form-field";
    import CTextfield from "../atoms/CTextfield.svelte";

    export let steps, disabled;

    let checked;

    let stepsInput;
</script>

{#each steps as step, i}
<FormField>
    <Checkbox bind:checked touch/>
    <CTextfield {disabled} value="{step.description}" label="Schritt {i+1}"></CTextfield>
</FormField>
{/each}