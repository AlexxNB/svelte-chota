<script>
	import {getEventsAction,getAttributesAction} from './utils';
    import {current_component} from 'svelte/internal';

	const events = getEventsAction(current_component);
	const attrs = getAttributesAction(current_component);
	
    let is_header = ($$props.$$slots.header !== undefined);
    let is_footer = ($$props.$$slots.footer !== undefined);
</script>

<div class="card" use:events use:attrs={$$props}>
{#if is_header}
	<header>
    	<slot name="header"></slot>
  	</header>
{/if}
	<slot></slot>
{#if is_footer}
	<footer>
    	<slot name="footer"></slot>
  	</footer>
{/if}
</div>