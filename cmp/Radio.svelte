<script>
	import {getClassAttr,getEventsAction} from './utils';
	import {onMount} from 'svelte';	
	import {current_component} from 'svelte/internal';

	export let value = '';
	export let group = '';

	const events = getEventsAction(current_component);
	
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
		use:events
		{checked}
	/> 
    <slot />
</label>
{:else}
<input class={classAttr} type="radio"
	on:change={handleChange}
	use:events
	{checked}
/> 
{/if}

