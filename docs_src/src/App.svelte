<script>
	import {Nav,Row,Col,Button,Card,Icon} from './../../cmp/index';
	import Sections from './cmp/Sections.svelte';
	import MobileSections from './cmp/MobileSections.svelte';
	import Docs from './cmp/Docs.svelte';
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

<div class="top"><Nav>
		<div slot="left" class="navleft">
			{#if mobile}
				<Button icon={mdiMenu} clear on:click={handleDropdown}/>
				{#if dropdown}
					<div class="dropdown" on:click|stopPropagation={handleSelection}>
						<Card>
							<MobileSections/>
						</Card>
					</div>
				{/if}
			{/if}
			<span class="logo">
				SVELTE<span class="text-light">-</span><span class="text-primary">chota</span>
			</span>
		</div>
		
		<div slot="right">
			<a class="github" href="https://github.com/alexxnb/svelte-chota" target="_blank" 
				on:mouseenter={e=>spin=true} on:mouseleave={e=>spin=false}>
				<Icon path={mdiGithubCircle} size=2 {spin}/>
			</a>
		</div>
	</Nav>
</div>


<style>
	:global(:root){
		--nav-height: 50px;
		--sections-width: 300px;
	}

	.navleft{
		white-space: nowrap;
		padding-left: 0px;
	}
	.logo{
		font-size: 3rem;
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

	.github {
		color:var(--color-primary);
	}
</style>