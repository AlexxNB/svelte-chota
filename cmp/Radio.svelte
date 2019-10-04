<script>
	import {getEventsAction,getAttributesAction} from './utils';
	import {onMount} from 'svelte';	
	import {current_component} from 'svelte/internal';

	export let value = '';
	export let group = '';

	const events = getEventsAction(current_component);
	const attrs = getAttributesAction(current_component);

	let checked = false;
	let labeled = $$props.hasOwnProperty('$$slots');

	function handleChange() {
		group = value;
	}
	
	$: checked = (group === value); 
</script>

{#if labeled}
<label>
    <input type="radio"
		on:change={handleChange}
		use:events	
		{checked}
	/> 
    <slot />
</label>
{:else}
<input type="radio"
	on:change={handleChange}
	use:events use:attrs={$$props}
	{checked}
/> 
{/if}

