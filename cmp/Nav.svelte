<script>
	import {getClassAttr} from './utils';

    let is_left = ($$props.$$slots.left !== undefined);
    let is_center = ($$props.$$slots.center !== undefined);
	let is_right = ($$props.$$slots.right !== undefined);
	
	$: classAttr = getClassAttr('nav',$$props.class);
</script>

<nav class="{classAttr}">
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