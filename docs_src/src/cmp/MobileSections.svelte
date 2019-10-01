<script>
    import {routes} from './../routes';
</script>
<div>
    <ul>
    {#each routes as item}
        {#if !!item[1]}
            <li><a href="#{item[1]}">{item[0]}</a></li>
        {:else}
            <li>{item[0]}</li>
        {/if}
    {/each}
    </ul>
</div>

<style>

div{
    height: 400px;
    overflow-y: scroll;
    overflow-x: hide;
    margin-right:-18px;
}

ul{
    margin:0px;
    padding: 0px;
}

li{
    display:block;
    font-size: 1.8rem;
    font-weight: bold;   
}

li a{
    font-weight: normal;
    margin-left: 5px;
}

li a:hover{
    color: var(--color-primary);
}

</style>
