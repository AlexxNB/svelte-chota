<script>
	import {Nav,Row,Col,Button,Card,Icon} from './../../cmp/index';
	import Sections from './cmp/Sections.svelte';
	import MobileSections from './cmp/MobileSections.svelte';
	import Docs from './cmp/Docs.svelte';
	import GithubLink from './cmp/GithubLink.svelte';
	import { mdiMenu, mdiGithubCircle } from '@mdi/js'; 

	let mobile = false;

	let width = 1024;

	let ghspin = false;

	$: mobile = (width < 700);


	let dropdown = false;
	function handleDropdown(e) {
		e.stopPropagation();
		dropdown = !dropdown;

		const handleWindow = () => {
			if(dropdown) 
			dropdown = false;
			window.removeEventListener('click',handleWindow);
		}
		
		if(dropdown) {
			window.addEventListener('click',handleWindow);
		}
	}
	
	function handleSelection() {
		dropdown = false;
	}

	let spin =false;
</script>

<svelte:window bind:innerWidth={width}/>

<div class="content" class:margin={!mobile}><Docs/></div>

{#if !mobile}
<div class="sections"><Sections/></div>
{/if}

<div class="top">
{#if mobile}
	<Nav>
		<div slot="left" class="burger">
			<Button icon={mdiMenu} clear on:click={handleDropdown}/>
			{#if dropdown}
				<div class="dropdown" on:click|stopPropagation={handleSelection}>
					<Card>
						<MobileSections/>
					</Card>
				</div>
			{/if}
		</div>

		<div slot="center">
			<img src="favicon.png" alt="Logo"/>
		</div>
		
		<div slot="right">
			<GithubLink />
		</div>
	</Nav>
{:else}
	<Nav>
		<div slot="left">
			<span class="brand">
				SVELTE<span class="text-light">-</span><span class="text-primary">chota</span>
			</span>
		</div>
		
		<div slot="right">
			<GithubLink animation/>
		</div>
	</Nav>
{/if}

	
</div>


<style>
	:global(:root){
		--nav-height: 50px;
		--sections-width: 300px;
	}

	img{ 
		margin-top: 10px;
		width:32px;
		height: 32px;
	}

	.burger{
		margin-top:7px;
	}

	.top { 
		position: fixed;
		top:0px;
		width:100%;
		box-shadow: 0 0 15px -5px var(--color-svelte-dark);
		background-color:#FFF;
		z-index: 9999;
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
		margin-top: var(--nav-height);
	}

	.margin {
		margin-left: var(--sections-width);
	}

	.dropdown{
		position:absolute;
	}
</style>