<script>
	import {getEventsAction} from './utils';
	import {current_component} from 'svelte/internal';

	export let small = false;
	export let large = false;

	const events = getEventsAction(current_component);
</script>

<span class:tag={1} class:is-small={small} class:is-large={large} use:events {...$$restProps}><slot></slot></span>