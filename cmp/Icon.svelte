<script>
	import Icon from 'mdi-svelte';

	export let path;
	export let size = 1;
	export let color = null;
	export let flip = null;
	export let rotate = 0;
	export let spin = false;
</script>

<Icon {path} {size} {color} {flip} {rotate} {spin} />