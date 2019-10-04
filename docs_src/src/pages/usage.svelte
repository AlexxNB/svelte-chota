<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Button} from './../../../cmp/index';

    let button_text = 'Hover me';
</script>
<h1>Usage</h1>


<Snippet code={`
<script>
    import {Input,Button} from 'svelte-chota';
</script>

<Input placeholder="What you want?" /> <Button>Find</Button>
`}>

<p>Just import necessary components from the <code>svelte-chota</code> package in your components</p>

</Snippet>


<h3>Events handlers</h3>

<p>You can use any <code>`on:eventname`</code> directive with almost any components.</p>

<Snippet code={`
<script>
    import {Button} from 'svelte-chota';
    let button_text = 'Hover me';
</script>

<Button 
    on:mouseenter={ e => button_text="Don't touch me!" }
    on:mouseleave={ e => button_text="Ok, hover me again" }
>{button_text}</Button>
`}>

<Button 
    on:mouseenter={ e => button_text="Don't touch me!" }
    on:mouseleave={ e => button_text="Ok, hover me again" }
>{button_text}</Button>

</Snippet>