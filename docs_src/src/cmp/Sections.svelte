<script>
    import { routes } from './../routes';
    import { mdiArrowRight } from '@mdi/js'; 
    import { Icon } from './../../../cmp/index';

    let section = getHash();


    function hashHandler() {
        section = getHash();
    }

    function getHash(){
        return window.location.hash.replace('#','');
    }
</script>

<svelte:window on:hashchange={hashHandler}/>

<div>
    <ul>
    {#each routes as item}
        {#if !!item[1]}
            {#if item[1] === section}
            <li>
                <span class="pull-right">
                    <Icon path={mdiArrowRight} size=2/>
                </span>
                <a href="#{item[1]}" class="active">{item[0]}</a>
            </li>
            {:else}
            <li><a href="#{item[1]}">{item[0]}</a></li>
            {/if}
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

li a.active{
    color: #FFF;
    font-weight: bolder;
}

</style>
