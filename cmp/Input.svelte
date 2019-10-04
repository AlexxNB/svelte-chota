<script>
    import {getEventsAction,getAttributesAction} from './utils';
	import {getContext} from 'svelte';
	import {current_component} from 'svelte/internal';
	
    export let value = '';
    export let type = 'text';
    export let error = null;
    export let success = null;
	
    export let password = false;
    export let number = false;
    export let textarea = false;
    export let color = false;
	export let date = false;
	export let range = false;

	
	const events = getEventsAction(current_component);
	const attrs = getAttributesAction(current_component);

	const onInput = e => {
		value = e.target.value
		$$props.value = value
	}

	let getState = getContext('field:state');
	let state_unsubscribe = false;
	if(getState) {
		state_unsubscribe = getState.subscribe(state => {
			if(state === 'error') 
				error = true;
			else if(state === 'success') 
				success = true;
			else
				success = error = false;
		});
	}	

	$: if(password) type = 'password';
	$: if(number) type = 'number';
	$: if(textarea) type = 'textarea';
	$: if(color) type = 'color';
	$: if(date) type = 'date';
	$: if(range) type = 'range';
</script>


{#if type === 'number'}
	<input type="number" 
		class:error
		class:success
		bind:value
		use:events
		use:attrs={$$props}
	/>
{:else if type === 'range'}
	<input type="range" 
		class:error
		class:success
		bind:value
		use:events
		use:attrs={$$props}
	/>
{:else if type === 'textarea'}
	<textarea
		class:error 
		class:success 
		bind:value
		
		use:events
		use:attrs={$$props}
	/>
{:else}
	<input type={type} 
		class:error 
		class:success 
		on:input={onInput}
		use:events
		use:attrs={$$props}
	/>
{/if}

<style>
input[type=range]::-moz-range-track,input[type=range]::-webkit-slider-runnable-track {
  background-color: var(--color-primary);
}
</style>