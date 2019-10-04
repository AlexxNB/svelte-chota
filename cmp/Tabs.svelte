<script>
    import {getClassAttr,getEventsAction} from './utils';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import {current_component} from 'svelte/internal';

    export let active = 0;
    export let full = false;

    const events = getEventsAction(current_component);
    const active_tab = writable(active);
    let num = 0;

    setContext('tabs:getid',()=>num++);
    setContext('tabs:active',active_tab);

    $: active = $active_tab;
    $: classAttr = getClassAttr('tabs',$$props.class);
</script>

<nav class={classAttr} class:is-full={full} use:events>
  <slot></slot>
</nav>