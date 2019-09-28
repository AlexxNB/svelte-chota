<script>
	import {Nav,Row,Col} from './../../index';
	import Sections from './cmp/Sections.svelte'
	import Docs from './cmp/Docs.svelte'
</script>

<div class="grid-container">



<div class="sections"><Sections/></div>
<div class="content"><Docs/></div>

<Nav class="nav">
	<div slot="left"><h1>SVELTE<span class="text-light">-</span><span class="text-primary">chota</span></h1></div>
	<div slot="right">Github</div>
</Nav>
</div>

<style>
	:global(:root) {
		--font-family: "Overpass", sans-serif;

		--color-svelte-dark: #4a4a55;
		--color-svelte-primary: #ff3e00;
		--color-svelte-secondary: #676778;
		--color-svelte-gray: #c9c9cf;
		--color-svelte-highlight: #40b3ff;
	}

	:global(body,html){
		color: var(--color-svelte-dark);
		height: 100%;
        margin: 0px;
	}

	

	h1{
		margin:0px;
	}

	:global(.grid-container) {
		display: grid;
		grid-template-columns: 300px auto;
		grid-template-rows: 50px auto;
		grid-template-areas: 	"nav      nav" 
								"sections content" ;
		min-height:100vh;
	}

	:global(.nav) { 
		grid-area: nav; 
		box-shadow: 0 8px 8px -8px var(--color-svelte-dark);

	}
	:global(.sections) { grid-area: sections;}
	:global(.content) { grid-area: content; }
</style>