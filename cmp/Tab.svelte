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

<style>
  span {
      padding: 1rem 2rem;
      flex: 0 1 auto;
      color: var(--color-darkGrey);
      border-bottom: 2px solid var(--color-lightGrey);
      text-align: center;
      cursor: pointer;
  }

  span.active {
      opacity: 1;
      border-bottom: 2px solid var(--color-darkGrey);
      border-color: var(--color-primary);
  }


  :global(.tabs.is-full) span {
      flex: 1 1 auto;
  }
</style>