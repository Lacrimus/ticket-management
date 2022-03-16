<script>
    export let content;
</script>

<style>

</style>
   
<div class="fixed bottom-0 w-full bg-blue-100 border-t border-blue-400">
    <div class="p-1">
        {#each content as item}
        {#if item.option}
            <button class="px-0.5 mx-0.5 rounded-md border-2 border-blue-400 focus:outline-none">
                 <p>{item.text}</p>
            </button>
        {:else}
            <p> {item.text}</p>
        {/if}
        {/each}
    </div>
</div>
