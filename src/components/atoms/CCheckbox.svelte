<script lang="ts">
    import Checkbox from "@smui/checkbox";
    import { createEventDispatcher } from "svelte";

    //Sub-ideal implementation

    const dispatch = createEventDispatcher();

    export let checked = 0;

    let booleanChecked = checked ? true : false;

</script>

<Checkbox on:click={() => {checked = checked ? 0 : 1; dispatch("click");}} checked={booleanChecked} touch/>
