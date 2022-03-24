<script lang="ts">
    import Textfield from "@smui/textfield";
    import Card, { Content } from '@smui/card';
    export let style = undefined, helperLine$style = undefined, textarea = undefined;
    export let disabled = true;
    export let value: string | null = null;
    export let label: string | null = null;

    $: if(value == "") {value = null;}

</script>

{#if disabled}
    {#if textarea}
        <Card variant="outlined" style="margin-top: 16px;">
            <div class="mdc-floating-label mdc-floating-label--float-above">{label}</div>
            <Content>{value}</Content>
        </Card>
    {:else}
        <div class="mdc-text-field smui-text-field--standard mdc-text-field--label-floating" style="min-width: 208px; {style}">
            <div class="mdc-floating-label mdc-floating-label--float-above">{label}</div>
            <p>{value}</p>
            <div class="mdc-line-ripple"></div>
        </div>
    {/if}
    <slot></slot>
{:else}
    <Textfield {disabled} bind:value {label} {style} {helperLine$style} {textarea}>
        <slot></slot>
    </Textfield>
    <slot name="trailingIcon"></slot>
{/if}

