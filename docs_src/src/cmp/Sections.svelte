<script>
    import {getSections} from './../routes';
    console.log(getSections());
</script>
<div>
    <ul>
    {#each getSections() as item}
        {#if item[1]}
            <li><a href="#{item[1]}">{item[0]}</a></li>
        {:else}
            <li>{item[0]}</li>
        {/if}
    {/each}
    </ul>
</div>

<style>

div{
    background-color:var(--color-svelte-secondary);
    height: 100%;
}

ul{
    margin:0px;
    padding: 10px;
}

li{
    display:block;
    color: var(--color-svelte-gray);
    font-size: 1.8rem;
    font-weight: bold;   
}

li a{
    font-weight: normal;
    color: var(--color-svelte-gray);
    margin-left: 20px;
}

li a:hover{
    color: #FFF;
}

</style>
