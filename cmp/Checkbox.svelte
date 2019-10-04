<script>
	import {getClassAttr,isArray,getEventsAction} from './utils';
	import {current_component} from 'svelte/internal';

	export let value = '';
	export let group = [];
	export let checked = false;

	const events = getEventsAction(current_component);

	let labeled = $$props.hasOwnProperty('$$slots');

	$: classAttr = getClassAttr($$props.class);



	function handleChange(on) {
		if(!isArray(group)) group = [];
		const idx = group.indexOf(value);
		if (on && idx === -1) {
			group.push(value);
			group = group;
		} else if (!on && idx !== -1) {
			group.splice(idx, 1);
			group = group;
		}
	}

	$: if(isArray(group)) {
		checked = (group.indexOf(value) !== -1);
	} else checked = false;
		
	if(checked) handleChange(checked);
	
	
</script>

{#if labeled}
<label>
    <input class={classAttr} type="checkbox" 
		on:change={e=>handleChange(e.srcElement.checked)}
		use:events
		{checked}
	/> 
    <slot />
</label>
{:else}
<input class={classAttr} type="checkbox" 
	on:change={e=>handleChange(e.srcElement.checked)}
    use:events
	{checked}
/> 
{/if}

