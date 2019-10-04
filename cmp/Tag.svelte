<script>
	import {getClassAttr,getEventsAction} from './utils';
	import {current_component} from 'svelte/internal';

	export let small = false;
	export let large = false;

	const events = getEventsAction(current_component);

	$: classAttr = getClassAttr('tag',$$props.class);
</script>

<span class={classAttr} class:is-small={small} class:is-large={large} use:events><slot></slot></span>