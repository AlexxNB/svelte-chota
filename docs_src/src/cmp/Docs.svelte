<script>
	import { onMount } from 'svelte';
    import {getComponents} from './../routes';
    

    export let section = 'top';

    let scroll = 0;


    function scrollToAnchor(slug) {
        const anchor = document.getElementById(`anchor_${slug}`);
        console.log(slug);
        if(anchor) {
            const offset = anchor.getBoundingClientRect();
            scroll += offset.top - 45;
        }
    }

    $:scrollToAnchor(section);
</script>

<svelte:window bind:scrollY={scroll}/>

<div class="docs">
{#each getComponents() as doc}
    <span id="anchor_{doc.slug}"/>
    <svelte:component this={doc.component}/>
    <hr/>
{/each}
</div>

<style>
.docs{
    padding: 20px;
}

</style>
