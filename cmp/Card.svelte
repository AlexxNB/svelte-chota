<script>
	import {getClassAttr,getEventsAction} from './utils';
    import {current_component} from 'svelte/internal';

	const events = getEventsAction(current_component);
	
    let is_header = ($$props.$$slots.header !== undefined);
    let is_footer = ($$props.$$slots.footer !== undefined);
	
	$: classAttr = getClassAttr('card',$$props.class);
</script>

<div class="{classAttr}" use:events>
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