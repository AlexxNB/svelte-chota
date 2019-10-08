<script>
	import {getEventsAction,getAttributesAction} from './utils';
	import {current_component} from 'svelte/internal';

	const events = getEventsAction(current_component);
	const attrs = getAttributesAction(current_component);
</script>

<div class="container" use:events use:attrs={$$props}><slot></slot></div>