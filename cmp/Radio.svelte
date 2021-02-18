<script>
	import {getEventsAction} from './utils';

	export let value = '';
	export let group = '';

	const events = getEventsAction();

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
		{...$$restProps}
		{checked}
	/> 
    <slot />
</label>
{:else}
<input type="radio"
	on:change={handleChange}
	use:events 
	{...$$restProps}
	{checked}
/> 
{/if}

