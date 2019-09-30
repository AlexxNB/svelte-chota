<script>
	import {getClassAttr,isArray} from './utils';
	export let value = '';
	export let group = [];

	let checked = false;

	let labeled = $$props.hasOwnProperty('$$slots');

	$: classAttr = getClassAttr($$props.class);

	function handleChange(e) {
		if(!isArray(group)) group = [];
		const idx = group.indexOf(value);
		const on = e.srcElement.checked;
		if (on && idx === -1) {
			group.push(value);
			group = group;
		} else if (!on && idx !== -1) {
			group.splice(idx, 1);
			group = group;
		}
	}
</script>

{#if labeled}
<label>
    <input class={classAttr} type="checkbox" 
		on:change={handleChange}
		on:change on:input
		{checked}
	/> 
    <slot />
</label>
{:else}
<input class={classAttr} type="checkbox" 
	on:change={handleChange}
    on:change on:input
	{checked}
/> 
{/if}

