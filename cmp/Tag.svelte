<script>
	import {getEventsAction} from './utils';

	export let small = false;
	export let large = false;

	const events = getEventsAction();
</script>

<span class:tag={1} class:is-small={small} class:is-large={large} use:events {...$$restProps}><slot></slot></span>