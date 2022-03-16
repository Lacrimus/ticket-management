<script>
  import NavTab from "../atoms/NavTab.svelte";
  import { sidenav } from '../../stores.js';
  import config from "../../config.js";

  let tabs = config.navtabs;
;
</script>

<!--
	@component
	A sidebar for navigating in higher-than-wide screens.
-->

<div class="{$sidenav.open ? '' : 'hidden'}">
    <!--<div class="absolute inset-0 bg-gray-800 bg-opacity-20 transition-opacity {$sidenav.open ? 'bg-opacity-20' : 'bg-opacity-0'}"></div>-->
    <div class="flex fixed z-10 right-0 rounded-l-md shadow-md {$sidenav.open ? '' : 'w-0'}">
        <div class="flex flex-col py-2 h-full bg-white">
          {#each tabs as tab}
            <NavTab {...tab}/>
            {#if tab.to == "/" || tab.to == "/done"}
              <div class="mt-1 mb-2 h-0.5 border-b border-blue-200"></div>
            {/if}
          {/each}
        </div>
    </div>
</div>