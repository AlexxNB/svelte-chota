<script>
    import {getEventsAction} from './utils';

    export let reverse = false;

    const events = getEventsAction();
</script>

<div class:row={1} class:reverse use:events {...$$restProps}>
    <slot></slot>
</div>