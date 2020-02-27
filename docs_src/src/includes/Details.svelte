<script>
	import {Details} from 'svelte-chota';
	export let title = '';
	export let comment = '';
	export let open = false;
</script>

<Details {open}>
	<h3 slot="summary" class="summary">{title}</h3>
	<p slot="summary" class="comment">{comment}</p>
    <slot />
</Details>

<style>
.summary{
    display:inline-block;
    margin:0px;
    padding:0px;
}
.comment{
    margin:-.5rem 0 1rem 1rem;
    padding:0px;
    color:var(--secondary)
}
</style>