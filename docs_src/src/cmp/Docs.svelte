<script>
    import {routes} from './../routes';
    
</script>

<div class="docs">
{#each routes as item}
    {#if !!item[1]}
        <a name="{item[1]}"/>
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

a{
    position: relative;
    top: -45px;
}
</style>
