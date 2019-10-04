<script>
    import {getEventsAction,getAttributesAction} from './utils';
    import {fade} from 'svelte/transition';
    import {current_component} from 'svelte/internal';
    
    export let active = false;

    const events = getEventsAction(current_component);
    const attrs = getAttributesAction(current_component);

    let is_header = ($$props.$$slots.header !== undefined);
    let is_footer = ($$props.$$slots.footer !== undefined);
</script>


{#if active}
<div class="container" transition:fade={{ duration: 200 }}>
    <div class="background" on:click={e => active=false}/>
    <div class="modal" use:events use:attrs={$$props}><slot></slot></div>
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
</style>