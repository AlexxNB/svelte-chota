<script>
	import {Icon} from './../../../cmp/index';
    import { mdiGithubCircle } from '@mdi/js'; 
    import { cubicInOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';

    export let animation = false;

    let hover = false;
    
    function mEnter () {
        if(!animation) return;
        hover=true
    }

    function mLeave () {
        hover=false
    }

    const rotation = tweened(0, {
		duration: 500,
		easing: cubicInOut
    });
    
    function slideLeft(node) {
        return {
            delay:0,
            duration:500,
            css: t => `overflow:hide; width: ${cubicInOut(t) * 50}px; opacity: ${t}`
        };
    }

    $: $rotation = (hover) ? 100 : 0;
</script>

<a class="github" href="https://github.com/alexxnb/svelte-chota" target="_blank" 
    on:mouseenter={mEnter} on:mouseleave={mLeave}>
    <Icon src={mdiGithubCircle} size=2 rotate={$rotation * -1}/>
    {#if hover}
    <span class="label" transition:slideLeft>Github</span>
    {/if}
</a>

<style>
.github {
    color:var(--color-primary);
}

.label{
    width:50px;
}
</style>