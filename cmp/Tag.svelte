<script>
	import {getEventsAction,getAttributesAction} from './utils';
	import {current_component} from 'svelte/internal';

	export let small = false;
	export let large = false;

	const events = getEventsAction(current_component);
	const attrs = getAttributesAction(current_component);
</script>

<span class="tag" class:is-small={small} class:is-large={large} use:events use:attrs={$$props}><slot></slot></span>