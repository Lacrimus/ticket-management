import "../build/smui.css"
import "../build/smui-dark.css"
import 'material-icons/iconfont/material-icons.css';
import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		name: "world"
	}
});

export default app;