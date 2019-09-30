<script>
	import {getClassAttr} from './utils';
	export let value = '';
	export let group = '';

	let checked = false;

	let labeled = $$props.hasOwnProperty('$$slots');

	$: checked = (group === value);
	$: classAttr = getClassAttr($$props.class);
</script>

{#if labeled}
<label>
    <input class={classAttr} type="radio" 
		on:change={() => group=value}
		on:change on:input
		{checked}
	/> 
    <slot />
</label>
{:else}
<input class={classAttr} type="radio" 
	on:change={() => group=value}
	on:change on:input
	{checked}
/> 
{/if}

