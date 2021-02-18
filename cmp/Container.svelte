<script>
	import {getEventsAction} from './utils';

	const events = getEventsAction();
</script>

<div class:container={1} use:events {...$$restProps}><slot></slot></div>