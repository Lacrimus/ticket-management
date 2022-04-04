<script>
    import Card from "@smui/card/src/Card.svelte";

    export let message;
</script>

<div class="alert-container">
    <Card variant="outlined" padded>
        <p>{message}</p>
        <slot></slot>    
    </Card>
</div>