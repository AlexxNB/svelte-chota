<script>
    import {getClassAttr} from './utils';
    import Card from './Card.svelte';
    import Icon from 'mdi-svelte';

    export let outline = null;
    export let primary = null;
    export let secondary = null;
    export let dark = null;
    export let error = null;
    export let success = null;
    export let clear = null;
    export let loading = null;
    export let icon = null;
    export let iconRight = null;

    export let dropdown = false;
    export let disabled = false;

    const hasSlot = ($$props.$$slots !== undefined);

    $: clIcon = ( (icon !== null || iconRight !== null) && hasSlot);
    $: clIcononly = (icon !== null && !hasSlot);

    $: classAttr = getClassAttr('button',$$props.class);
</script>


{#if dropdown === false}
<button  
    class="{classAttr}"

    class:outline
    class:primary
    class:secondary
    class:dark
    class:error
    class:success
    class:clear
    class:loading
    
    class:icon={clIcon}
    class:icon-only={clIcononly}

    {disabled}

    on:click
>
{#if icon} <span class="lefticon"> <Icon path={icon} size="1.4"/> </span>{/if}
<slot></slot>
{#if iconRight} <span class="righticon"> <Icon path={iconRight} size="1.4"/> </span>{/if}
</button>
{:else}
  <details class="dropdown">
    <summary  
        class="{classAttr}"

        class:outline
        class:primary
        class:secondary
        class:dark
        class:error
        class:success
        class:clear
        class:loading
        
        class:icon={clIcon}
        class:icon-only={clIcononly}

        {disabled}

        on:click
    >
    {#if icon} <span class="lefticon"> <Icon path={icon} size="1.4"/> </span>{/if}
      {dropdown}
    {#if iconRight} <span class="righticon"> <Icon path={iconRight} size="1.4"/> </span>{/if}
    </summary>
    <Card><slot></slot></Card>
  </details>
{/if}


<style>
@keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}

.loading {
    color: transparent !important;
    min-height: .8rem;
    pointer-events: none;
    position: relative;
}

.loading::after {
    animation: loading 500ms infinite linear;
    border: .2rem solid #FFFFFF;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: .8rem;
    left: 50%;
    margin-left: -.4rem;
    margin-top: -.4rem;
    position: absolute;
    top: 50%;
    width: .8rem;
    z-index: 1;
}


.icon > .lefticon{
  margin: -10px 10px -10px 0px;
}

.icon > .righticon{
  margin: -10px 0px -10px 10px;
}


.icon-only{
  padding:.75rem 1rem;
}

summary, button{
  white-space: nowrap;
}
</style>