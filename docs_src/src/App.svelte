<script>
	import {Nav,Row,Col} from './../../index';
	import Sections from './cmp/Sections.svelte'
	import Docs from './cmp/Docs.svelte'
</script>

<div class="grid-container">
	<div class="sections"><Sections/></div>
	<div class="content"><Docs/></div>
	<div class="nav">
		<Nav>
			<h1 slot="left">SVELTE<span class="text-light">-</span><span class="text-primary">chota</span></h1>
			<div slot="right">Github</div>
		</Nav>
	</div>
</div>

<style>

	h1{
		margin:0px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 300px auto;
		grid-template-rows: 50px auto;
		grid-template-areas: 	"nav      nav" 
								"sections content" ;
		min-height:100vh;
	}

	.nav { 
		grid-area: nav; 
		box-shadow: 0 0 15px -5px var(--color-svelte-dark);

	}
	.sections { grid-area: sections;}
	.content { grid-area: content; }
</style>