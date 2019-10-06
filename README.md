# svelte-chota
Svelte UI kit based on Chota CSS framefork.

## Why chota?

When you decides to use [Svelte](https://svelte.dev) in your projects, you expects very tiny bundles of result code.

So the [chota](https://jenil.github.io/chota/) is a super light-weight CSS framework, which will add only ~3kb of gzipped code to your CSS bundle.

[Svelte-chota](https://github.com/AlexxNB/svelte-chota) is UI kit for easy using [chota](https://jenil.github.io/chota/) in your [Svelte](https://svelte.dev) projects.

## Documentation
* Svelte-chota [documentation](https://alexxnb.github.io/svelte-chota).
* chota [documentation](https://jenil.github.io/chota/).

## Installation

There are [three ways](https://alexxnb.github.io/svelte-chota/#install), how to start using svelte-chota. Recomendended one:

### Install packages
You should install three packages:

* `chota` - css framework itself
* `svelte-chota` - Svelte components for chota
* `rollup-plugin-postcss` - allows import css files inside your components and pack it in the bundle.

```bash
npm install --save chota svelte-chota rollup-plugin-postcss
```

### Rollup config

Open the `rollup.config.js` file and edit the config as shown:

```javascript
...
// import postccs plugin at the top of the file
import postcss from 'rollup-plugin-postcss';
....

const production = !process.env.ROLLUP_WATCH;

export default {
    ...
    plugins: [
        ...
        svelte({
            ...
            // REPLACE
            //   css: css => {
            //      css.write('public/bundle.css');
            //   }
            // BY:
            emitCss:true
        }),
        // add the postccs plugin
        postcss({
			extract: true,
			minimize: production,
			sourceMap: !production
		}),
        ...
    ]
```

There we adding PostCSS plugin to pack all component's incapsulated CSS and imported CSS files in a single `bundle.css`

### Importing chota

Now you can import `chota` in the your `App.svelte` file:

```html
<script>
    import "chota";
</script>
```

> Note: because you installed PostCSS plugin, now you can import any external css file same way.

## Usage

Just import necessary components from the svelte-chota package in your components:

```html
<script>
    import {Input,Button} from 'svelte-chota';
</script>

<Input placeholder="What you want?" /> <Button>Find</Button>
```

### Events handlers

You can use any `on:eventname` directive with any components:

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
### Attributes

You can pass any attributes to the component, even the class attribute.

```html
<script>
    import {Card} from 'svelte-chota';
</script>

<Card class="is-rounded text-center" style="height:100px; width:100px" title="Hello">
    <h1>Hey!</h1>
</Card>
```