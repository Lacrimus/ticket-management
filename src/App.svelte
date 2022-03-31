<script>
	import { Router, Route } from "svelte-routing";

	import "./routes/_layout.svelte";

	import Home from "./routes/home.svelte";
	import Create from "./routes/create.svelte";
	import InProcess from "./routes/inprocess.svelte";
	import Done from "./routes/done.svelte";
	import Archive from "./routes/archive.svelte";
	
	import Nav from "./components/molecules/Nav.svelte"
	import Header from "./components/molecules/Header.svelte"
	import Drawer from "./components/molecules/Drawer.svelte"

	let deviceready

	let url = "";

	let width;

	let height;

	const appUser = "";
	/*
 	* Event listeners for the cordova API or mobile device events
 	*/
	document.addEventListener("deviceready", () => {
		deviceready = true;
	})

	// cordova device APIs loaded, calls are now possible
	function onDeviceReady() {
		console.log("Device is ready")
  		document.addEventListener("pause", onPause, false);
   	 	document.addEventListener("resume", onResume, false);
   		document.addEventListener("menubutton", onMenuKeyDown, false);
    // ...
	}

	function onPause() {

	}

	function onResume() {

	}

	function onMenuKeyDown() {

	}

	// error handeling
	window.addEventListener("cordovacallbackerror", function (event) {
    	alert("Cordova callback error: " + event.error);
	}); 

</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>

<style global lang="postcss">
	
</style>

<Router url="{url}">
	<Drawer>
		<Header/>
		<Nav/>
		<div class="container">
			<Route path="/"><Home/></Route>
			<Route path="create"><Create/></Route>
			<Route path="inprocess"><InProcess/></Route>
			<Route path="done"><Done/></Route>
			<Route path="archive"><Archive/></Route>
		</div>
	</Drawer>
</Router>
