<script>
    import {getClassAttr} from './utils';
	
    export let value = '';
    export let type = 'text';
    export let placeholder = null;
    export let error = null;
    export let success = null;
	export let disabled = false;
	
    export let password = false;
    export let number = false;
    export let textarea = false;
    export let color = false;
	export let date = false;
	export let range = false;
	
	export let min = null;
	export let max = null;
	
	  const onInput = e => {
		value = e.target.value
		$$props.value = value
	}
	
	$: classAttr = getClassAttr($$props.class);

	$: if(password) type = 'password';
	$: if(number) type = 'number';
	$: if(textarea) type = 'textarea';
	$: if(color) type = 'color';
	$: if(date) type = 'date';
	$: if(range) type = 'range';
</script>


{#if type === 'number'}
	<input type="number" 
		class={classAttr} 
		class:error
		class:success
		bind:value
		{min}
		{max}
		{placeholder}
		{disabled}
		on:input
		on:focus
		on:blur
	/>
{:else if type === 'range'}
	<input type="range" 
		class={classAttr} 
		class:error
		class:success
		bind:value
		{min}
		{max}
		{placeholder}
		{disabled}
		on:input
		on:focus
		on:blur
	/>
{:else if type === 'textarea'}
	<textarea
		class={classAttr} 
		class:error 
		class:success 
		{placeholder}
		{disabled}
		bind:value
		on:input
		on:focus
		on:blur
	/>
{:else}
	<input type={type} 
		class={classAttr} 
		class:error 
		class:success 
		{placeholder}
		{disabled}
		{value}
		on:input={onInput}
		on:focus
		on:blur
	/>
{/if}

