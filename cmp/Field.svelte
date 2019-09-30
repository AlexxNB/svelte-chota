<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { getClassAttr } from './utils';
	
	export let label = false;
	export let error = false;
	export let success = false;
	export let grouped = false;
	export let gapless = false;

	const state = writable('');
	let message = false;

	setContext('field:state',state);
	
	$: if(gapless) grouped = true;

	$: 	if(typeof error === 'string'){
			state.set('error');
			message = error;
		}
		else if(typeof success === 'string'){
			state.set('success');
			message = success;
		}
		else {
			state.set('');
			message = false;
		}

	


	$: classAttr = getClassAttr($$props.class);
</script>

<div class={classAttr} class:nomessage={!message}>
	{#if label}
		<label>{label}</label>
	{/if}
	<p class:grouped class:gapless><slot/></p>
	{#if message}
		<p class="message" class:text-error={error} class:text-success={success}>{message}</p>
	{:else}
		<p class="message">&nbsp;</p>
	{/if}
</div>

<style>
p{
	margin:0px;
	padding:0px;
}

.message{
	font-size: smaller;
}
</style>