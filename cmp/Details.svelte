<script>
	import {getClassAttr} from './utils';
	export let dropdown = false;


	$: classAttr = getClassAttr($$props.class);
</script>

<details class={classAttr} class:dropdown>
	<summary><slot name="summary"></slot></summary>
	<slot></slot>
</details>

<style>
summary{
	cursor: pointer;
}
</style>