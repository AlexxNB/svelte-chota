<script>
	import {getEventsAction} from './utils';
	import {current_component} from 'svelte/internal';

	const events = getEventsAction(current_component);

    let is_left = $$props.$$slots && $$props.$$slots.left !== undefined;
    let is_center = $$props.$$slots && $$props.$$slots.center !== undefined;
	let is_right = $$props.$$slots && $$props.$$slots.right !== undefined;
</script>

<nav class:nav={1} use:events {...$$restProps}>
{#if is_left}
	<div class="nav-left">
		<slot name="left"></slot>
	</div>
{/if}
{#if is_center}
	<div class="nav-center">
		<slot name="center"></slot>
	</div>
{/if}
{#if is_right}
	<div class="nav-right">
		<slot name="right"></slot>
	</div>
{/if}
</nav>

<style>
	nav{
		width:100%;
		flex-direction: row;
	}

	:global(.nav-left) {
		justify-content: flex-start
	}
	:global(.nav-right) {
		justify-content: flex-end
	}
</style>
