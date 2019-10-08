<script>
	import {getEventsAction,getAttributesAction} from './utils';
	import {current_component} from 'svelte/internal';

	export let dropdown = false;
	export let open = false;

	const events = getEventsAction(current_component);
	const attrs = getAttributesAction(current_component);
</script>

<details class:dropdown use:events use:attrs={$$props} bind:open>
	<summary><slot name="summary"></slot></summary>
	<slot></slot>
</details>

<style>
summary{
	cursor: pointer;
}
</style>