<script>
    import {getClassAttr,getEventsAction} from './utils';
    import {fade} from 'svelte/transition';
    import {current_component} from 'svelte/internal';
    
    export let active = false;

    const events = getEventsAction(current_component);

    let is_header = ($$props.$$slots.header !== undefined);
    let is_footer = ($$props.$$slots.footer !== undefined);

    $: classAttr = getClassAttr('modal',$$props.class);
</script>


{#if active}
<div class="container" transition:fade={{ duration: 200 }}>
    <div class="background" on:click={e => active=false}/>
    <div class={classAttr} use:events><slot></slot></div>
</div>
{/if}

<style>
.container{
    position:fixed;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    z-index:10000;
}

.background{
    position:fixed;
    top:0px;
    left: 0px;
    width:100vw;
    height:100vh;
    background-color:black;
    opacity: 0.5;
}

.modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width:400px;
    background-color: white;
}

.close{
    position:absolute;
    right:5px;
    top:0px;
    color:var(--color-lightGrey);
    transition : color 200ms ease-out;
    font-size:2rem;
}

.close:hover{
    color:var(--color-primary);
    cursor:pointer;
}
</style>