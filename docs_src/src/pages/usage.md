# Usage

Just import necessary components from the `svelte-chota` package inside your components

```svelte
<script>
    import {Input,Button} from 'svelte-chota';
</script>

<Input placeholder="What you want?" /> <Button>Find</Button>
```


### Events handlers

You can use any `on:eventname` directive with any components.

```example
<script>
    import {Button} from 'svelte-chota';
    let button_text = 'Hover me';
</script>

<Button 
    on:mouseenter={ e => button_text="Don't touch me!" }
    on:mouseleave={ e => button_text="Ok, hover me again" }
>{button_text}</Button>
```


### Attributes

You can pass any attributes to the component, even the  `class` attribute.

```example
<script>
    import {Card} from 'svelte-chota';
</script>

<Card 
    class="is-rounded text-center" 
    style="height:100px; width:100px" 
    title="Hello"
>
    <h1>Hey!</h1>
</Card>
```