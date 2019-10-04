<script>
    import {getClassAttr,getEventsAction} from './utils';
    import {current_component} from 'svelte/internal';

    export let reverse = false;

    const events = getEventsAction(current_component);

    $: classAttr = getClassAttr('row',$$props.class);
</script>

<div class="{classAttr}" class:reverse use:events>
    <slot></slot>
</div>