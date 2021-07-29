<script>
	import {getEventsAction} from './utils';

	const events = getEventsAction();
</script>

<nav class:nav={1} use:events {...$$restProps}>
{#if $$slots.left}
	<div class="nav-left">
		<slot name="left"></slot>
	</div>
{/if}
{#if $$slots.center}
	<div class="nav-center">
		<slot name="center"></slot>
	</div>
{/if}
{#if $$slots.right}
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
