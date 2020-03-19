<script>
    import { getEventsAction } from './utils';
    import { getContext } from 'svelte';
    import { current_component } from 'svelte/internal';
    
    export let tabid = false;

    const events = getEventsAction(current_component);

    const active_tab = getContext('tabs:active');
    const id = getContext('tabs:getid')();

    $: active = ($active_tab === tabid || $active_tab === id);
</script>

<!--TODO: write issue to chota to replace a by span-->
<a href="/" class:active use:events {...$$restProps} on:click|preventDefault={()=>active_tab.set( (tabid === false) ? id : tabid)}>
  <slot></slot>
</a>