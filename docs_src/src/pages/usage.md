<script>
    import Example from './../cmp/Example.svelte';
    import {Button,Card} from './../../../cmp/index';

    let button_text = 'Hover me';
</script>

# Usage

<Example>
    <div slot="text">
        Just import necessary components from the `svelte-chota` package in your components
    </div>
    <div slot="code">
        ```html
        <script>
            import {Input,Button} from 'svelte-chota';
        </script>

        <Input placeholder="What you want?" /> <Button>Find</Button>
        ```
    </div>
</Example>


### Events handlers

You can use any `on:eventname` directive with any components.

<Example>
    <div slot="text">
        <Button
            on:mouseenter={ e => button_text="Don't touch me!" }
            on:mouseleave={ e => button_text="Ok, hover me again" }
        >{button_text}</Button>
    </div>
    <div slot="code">
        ```html
        <script>
            import {Button} from 'svelte-chota';
            let button_text = 'Hover me';
        </script>

        <Button 
            on:mouseenter={ e => button_text="Don't touch me!" }
            on:mouseleave={ e => button_text="Ok, hover me again" }
        >{button_text}</Button>
        ```
    </div>
</Example>




### Attributes

You can pass any attributes to the component, even the  `class` attribute.

<Example>
    <div slot="text">
        <Card class="is-rounded text-center" style="height:100px; width:100px" title="Hello">
            <h1>Hey!</h1>
        </Card>
    </div>
    <div slot="code">
        ```html
        <script>
            import {Card} from 'svelte-chota';
        </script>

        <Card class="is-rounded text-center" style="height:100px; width:100px" title="Hello">
            <h1>Hey!</h1>
        </Card>
        ```
    </div>
</Example>