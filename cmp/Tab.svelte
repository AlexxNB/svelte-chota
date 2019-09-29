<script>
    import {getClassAttr} from './utils';
    import { getContext } from 'svelte';

    export let tabid = false;

    const active_tab = getContext('tabs:active');
    const id = getContext('tabs:getid')();


    $: active = ($active_tab === tabid || $active_tab === id);
    $: classAttr = getClassAttr($$props.class);
</script>

<!--TODO: write issue to chota to replace a by span-->
<a href="/" class={classAttr} class:active on:click|preventDefault={()=>active_tab.set( (tabid === false) ? id : tabid)}>
  <slot></slot>
</a>