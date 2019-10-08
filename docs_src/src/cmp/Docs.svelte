<script>
    import {routes} from './../routes';

    function watchSection(node) {
        const name = node.name;

        const handler = () => {
            const rect = node.getBoundingClientRect();            
            if(rect.top > 0 && rect.top < 160) {
                node.name = node.name+'masked';
                window.location.hash = name;
                node.name = name;
            }
        }

        window.addEventListener('scroll',handler);

        return {
            destroy: () => window.removeEventListener('scroll',handler)
        }
    }
</script>

<div class="docs">
{#each routes as item}
    {#if !!item[1]}
        <!-- svelte-ignore a11y-missing-attribute a11y-missing-content -->
        <a name="{item[1]}" use:watchSection/>
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
