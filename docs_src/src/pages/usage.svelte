<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Button,Card} from './../../../cmp/index';

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

<p>You can use any <code>`on:eventname`</code> directive with any components.</p>

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


<h3>Attributes</h3>

<p>You can pass any attributes to the component, even the <code>class</code> attribute.</p>

<Snippet code={`
<script>
    import {Card} from 'svelte-chota';
</script>

<Card class="is-rounded text-center" style="height:100px; width:100px" title="Hello">
    <h1>Hey!</h1>
</Card>
`}>

<Card class="is-rounded text-center" style="height:100px; width:100px" title="Hello">
    <h1>Hey!</h1>
</Card>

</Snippet>