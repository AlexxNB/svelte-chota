<script>
	import {getEventsAction} from './utils';

	const events = getEventsAction();
	
    let is_header = $$props.$$slots && $$props.$$slots.header !== undefined;
    let is_footer = $$props.$$slots && $$props.$$slots.footer !== undefined;
</script>

<div class:card={1} use:events {...$$restProps}>
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
