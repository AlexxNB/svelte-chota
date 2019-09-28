<script>
    import {getComponents} from './../routes';
</script>

<div class="docs">
{#each getComponents() as cmp}
    <svelte:component this={cmp}/>
    <hr/>
{/each}
</div>

<style>
.docs{
    padding: 10px;
}

</style>
