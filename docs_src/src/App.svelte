<script>
	import {onMount} from 'svelte';
	import {Nav,Row,Col} from './../../index';
	import Sections from './cmp/Sections.svelte'
	import Docs from './cmp/Docs.svelte'

	let section = "top";
	function setSection() {
		const hash = window.location.hash.replace('#','');
		section = (hash === '') ? 'top' : hash;
	}
	
	onMount(()=>{
		setSection();
	})
</script>

<svelte:window on:hashchange={setSection}/>

<div class="content"><Docs {section}/></div>

<div class="sections"><Sections/></div>

<div class="top"><Nav>
		<h1 slot="left">SVELTE<span class="text-light">-</span><span class="text-primary">chota</span></h1>
		<div slot="right">Github</div>
	</Nav>
</div>

<style>
	:global(:root){
		--nav-height: 50px;
		--sections-width: 300px;
	}

	h1{
		margin:0px;
	}

	.top { 
		position: fixed;
		top:0px;
		width:100%;
		box-shadow: 0 0 15px -5px var(--color-svelte-dark);
		background-color:#FFF;
	}

	.sections {
		position:fixed;
		top:0px;
		left:0px;
		padding-top: var(--nav-height);
		height: 100vh;
		width: var(--sections-width);
	}

	.content { 
		margin-left: var(--sections-width);
		margin-top: var(--nav-height);
	}
</style>