<script>
	import {getEventsAction} from './utils';

	export let dropdown = false;
	export let open = false;

	const events = getEventsAction();
</script>

<details class:dropdown use:events {...$$restProps} bind:open>
	<summary><slot name="summary"></slot></summary>
	<slot></slot>
</details>

<style>
summary{
	cursor: pointer;
}
</style>