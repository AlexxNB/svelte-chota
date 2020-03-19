<script>
	import {getEventsAction} from './utils';
	import {current_component} from 'svelte/internal';

	const events = getEventsAction(current_component);
</script>

<div class:container={1} use:events {...$$restProps}><slot></slot></div>