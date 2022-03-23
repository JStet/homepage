<script>
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import Main from "./Main.svelte";
	import SideArt from "./SideArt.svelte";

	let topic = "";

	function handleClicked(event) {
		topic = event.detail.name;
	}
</script>

<SideArt />

<!-- getting clicked icon from hero displayed on desktop-->
<Header on:clicked={handleClicked} />

<!-- Passing down clicked icon -->
<Main {topic} />

<Footer />

<style>
</style>
