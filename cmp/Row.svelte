<script>
    import {getEventsAction,getAttributesAction} from './utils';
    import {current_component} from 'svelte/internal';

    export let reverse = false;

    const events = getEventsAction(current_component);
    const attrs = getAttributesAction(current_component);
</script>

<div class="row" class:reverse use:events use:attrs={$$props}>
    <slot></slot>
</div>