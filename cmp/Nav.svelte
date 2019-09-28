<script>
    console.log($$props);

    console.log($$props.$$slots);

    let is_left = ($$props.$$slots.left !== undefined);
    let is_center = ($$props.$$slots.center !== undefined);
    let is_right = ($$props.$$slots.right !== undefined);
</script>

<nav class="nav">
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