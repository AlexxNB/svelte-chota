<script>
	import { onMount } from 'svelte';
    import {routes} from './../routes';
    
    export let section = 'top';
    let scroll = 0;

    function scrollToAnchor(slug) {
        const anchor = document.getElementById(`anchor_${slug}`);
        if(anchor) {
            const offset = anchor.getBoundingClientRect();
            scroll += offset.top - 45;
        }
    }

    $:scrollToAnchor(section);
</script>

<svelte:window bind:scrollY={scroll}/>

<div class="docs">
{#each routes as item}
    {#if !!item[1]}
        <span id="anchor_{item[1]}"/>
        <svelte:component this={item[2]}/>
        <hr/>
    {:else}
        <h1>{item[0]}</h1>
    {/if}
{/each}
</div>

<style>
.docs{
    padding: 20px;
}
h1{
    color: var(--color-primary);
}
</style>
