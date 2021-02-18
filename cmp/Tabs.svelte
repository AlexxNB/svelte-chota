<script>
    import {getEventsAction} from './utils';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    export let active = 0;
    export let full = false;

    const events = getEventsAction();

    const active_tab = writable(active);
    let num = 0;

    setContext('tabs:getid',()=>num++);
    setContext('tabs:active',active_tab);

    $: active = $active_tab;
</script>

<nav class:tabs={1} class:is-full={full} use:events {...$$restProps}>
  <slot></slot>
</nav>