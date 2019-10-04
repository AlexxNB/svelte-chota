<script>
    import {getEventsAction,getAttributesAction} from './utils';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import {current_component} from 'svelte/internal';

    export let active = 0;
    export let full = false;

    const events = getEventsAction(current_component);
    const attrs = getAttributesAction(current_component);

    const active_tab = writable(active);
    let num = 0;

    setContext('tabs:getid',()=>num++);
    setContext('tabs:active',active_tab);

    $: active = $active_tab;
</script>

<nav class="tabs" class:is-full={full} use:events use:attrs={$$props}>
  <slot></slot>
</nav>