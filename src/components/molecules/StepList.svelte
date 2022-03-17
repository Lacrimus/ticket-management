<script lang="ts">
    import { Icon, Label } from "@smui/common";  
    import Button from "@smui/button";
    import Textfield from "@smui/textfield";
    import Checkbox from "@smui/checkbox";
    import FormField from "@smui/form-field";

    export let steps, disabled;

    let checked;

    let stepsInput;
</script>

<div>
    {#each steps as step, i}
        <FormField>
            <Checkbox bind:checked touch/>
            <Textfield {disabled} value="{step.description}" label="Schritt {i+1}"></Textfield>
        </FormField>
    {/each}
</div>