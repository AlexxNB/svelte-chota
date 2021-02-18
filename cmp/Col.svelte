<script>
    import {getEventsAction} from './utils';

    export let size=false;
    export let sizeMD=false;
    export let sizeLG=false;

    const events = getEventsAction();

    function get_col_classes(d,md,lg) {
        let list = [];
        if(!size || (size < 1 || size > 12)) 
            list.push('col');
        else if (size >=1 && size <= 12)
            list.push(`col-${size}`);

        if(sizeMD)
        if (sizeMD >=1 && sizeMD <= 12)
            list.push(`col-${sizeMD}-md`);

        if(sizeLG)
        if (sizeLG >=1 && sizeLG <= 12)
            list.push(`col-${sizeLG}-lg`);
        
        return list.join(' ');
    }

    $: classes = $$restProps.hasOwnProperty('class') ? $$restProps['class']+' '+get_col_classes(size,sizeMD,sizeLG) : get_col_classes(size,sizeMD,sizeLG);
</script>

<div {...$$restProps} class={classes} use:events>
    <slot></slot>
</div>