<script>
	import {getClassAttr,getEventsAction} from './utils';
	import {current_component} from 'svelte/internal';

	export let dropdown = false;

	const events = getEventsAction(current_component);
	
	$: classAttr = getClassAttr($$props.class);
</script>

<details class={classAttr} class:dropdown use:events>
	<summary><slot name="summary"></slot></summary>
	<slot></slot>
</details>

<style>
summary{
	cursor: pointer;
}
</style>