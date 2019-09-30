<script>
	import {getClassAttr} from './utils';
	import {onMount} from 'svelte';

	export let value = '';
	export let group = '';
	let checked = false;

	let labeled = $$props.hasOwnProperty('$$slots');

	$: classAttr = getClassAttr($$props.class);

	function handleChange() {
		group = value;
	}
	
	$: checked = (group === value); 

	
</script>

{#if labeled}
<label>
    <input class={classAttr} type="radio"
		on:change={handleChange}
		on:change on:input
		{checked}
	/> 
    <slot />
</label>
{:else}
<input class={classAttr} type="radio"
	on:change={handleChange}
	on:change on:input
	{checked}
/> 
{/if}

