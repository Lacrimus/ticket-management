<script>
  import { Link } from "svelte-routing";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import config from "../../config.js";

  let tabs = config.navtabs;

  let active;

</script>

<TabBar {tabs} let:tab bind:active>
  <Link to={tab.to} style="text-decoration: none;">
    <Tab {tab} minWidth>
        <Label>
          {tab.title}
        </Label>
      </Tab>
    </Link>
</TabBar>