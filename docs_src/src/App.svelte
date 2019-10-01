<script>
	import {Nav,Row,Col,Button} from './../../index';
	import Sections from './cmp/Sections.svelte';
	import MobileSections from './cmp/MobileSections.svelte';
	import Docs from './cmp/Docs.svelte';
	import { mdiMenu } from '@mdi/js'; 

	let mobile = false;

	let width = 1024;

	$: mobile = (width < 700);
	
</script>

<svelte:window bind:innerWidth={width}/>

<div class="content" class:margin={!mobile}><Docs/></div>

{#if !mobile}
<div class="sections"><Sections/></div>
{/if}

<div class="top"><Nav>
		<div slot="left" class="navleft">
			{#if mobile}
				<Button icon={mdiMenu} clear dropdown>
					<MobileSections/>
				</Button>
			{/if}
			<span class="logo">
				SVELTE<span class="text-light">-</span><span class="text-primary">chota</span>
			</span>
		</div>
		
		<div slot="right">Github</div>
	</Nav>
</div>


<style>
	:global(:root){
		--nav-height: 50px;
		--sections-width: 300px;
	}

	.navleft{
		white-space: nowrap;
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
</style>