<script>
    import {getEventsAction} from './utils';
    import {current_component} from 'svelte/internal';

    export let reverse = false;

    const events = getEventsAction(current_component);
</script>

<div class:row={1} class:reverse use:events {...$$restProps}>
    <slot></slot>
</div>