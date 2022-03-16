<script>
    import { Link } from "svelte-routing";
    import { notify } from "../../stores.js";
    import { sidenav } from "../../stores.js";

    export let to = "/";
    export let title = "Home";

    let notified;

</script>

<!--
	@component
	A single tab / link in a navigation menu. Used by both "Navbar.svelte" and "Sidebar.svelte".
-->

<style>
    .animate {
        animation: pulse 1.2s infinite ease-out;
    }
    
    @keyframes pulse {
        from {
            background-color: rgba(191, 219, 254);
        }
        to {
            background-color: rgba(0,0,0);
        }
    }
</style>

<div class="inline-flex relative">
    {#if notified}
        <div class="inline-flex absolute w-full h-full animate"></div>
    {/if}
    <Link on:click={() => {sidenav.close()}} {to} class="p-1 px-2 w-full text-base leading-6 text-md">{title}</Link>
</div>