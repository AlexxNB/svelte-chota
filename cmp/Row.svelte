<script>
    import {getClassAttr} from './utils';
    export let reverse = false;

    $: classAttr = getClassAttr('row',$$props.class);
</script>

<div class="{classAttr}" class:reverse>
    <slot></slot>
</div>