<script>
    import { getEventsAction } from './utils';
    import { getContext } from 'svelte';
    
    export let tabid = false;

    const events = getEventsAction();

    const active_tab = getContext('tabs:active');
    const id = getContext('tabs:getid')();

    $: active = ($active_tab === tabid || $active_tab === id);
</script>

<span class:active use:events {...$$restProps} on:click|preventDefault={()=>active_tab.set( (tabid === false) ? id : tabid)}>
  <slot></slot>
</span>