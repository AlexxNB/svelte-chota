<script>
	import {getClassAttr} from './utils';

	export let small = false;
	export let large = false;

	$: classAttr = getClassAttr('tag',$$props.class);
</script>

<span class={classAttr} class:is-small={small} class:is-large={large}><slot></slot></span>