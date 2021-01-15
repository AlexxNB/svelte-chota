# svelte-chota
Svelte UI components based on the super light-weight [chota](https://jenil.github.io/chota/) CSS framework.

[![npm](https://img.shields.io/npm/v/svelte-chota)](https://www.npmjs.com/package/svelte-chota)   [![npm](https://img.shields.io/npm/dt/svelte-chota)](https://www.npmjs.com/package/svelte-chota)    [![](https://github.com/AlexxNB/svelte-chota/workflows/Publish%20on%20NPM/badge.svg)](https://github.com/AlexxNB/svelte-chota/actions?workflow=Publish+on+NPM)    [![](https://github.com/AlexxNB/svelte-chota/workflows/Build%20Documentation/badge.svg)](https://github.com/AlexxNB/svelte-chota/actions?workflow=Build+Documentation)

## Why chota?

When you decide to use [Svelte](https://svelte.dev) in your projects, you expect very tiny bundles of code.

[chota](https://jenil.github.io/chota/) is a super light-weight CSS framework, which adds only ~3kb of gzipped code to your CSS bundle.

[Svelte-chota](https://github.com/AlexxNB/svelte-chota) is a UI kit for easily using [chota](https://jenil.github.io/chota/) in your [Svelte](https://svelte.dev) projects.

## Documentation
* Svelte-chota [documentation](https://alexxnb.github.io/svelte-chota).
* chota [documentation](https://jenil.github.io/chota/).

## Installation

There are [three ways](https://alexxnb.github.io/svelte-chota/#install) to start using svelte-chota. Recommended method:

### Install packages
You should install three packages:

* `chota` - css framework itself
* `svelte-chota` - Svelte components for chota
* `rollup-plugin-postcss` - allows you to import css files inside your components and then pack it in the bundle

```bash
npm install -D chota svelte-chota rollup-plugin-postcss
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

Here we are adding PostCSS plugin to pack all components' incapsulated CSS and imported CSS files into a single `bundle.css`

### Importing chota

Now you can import `chota` in the your `App.svelte` file:

```html
<script>
    import "chota";
</script>
```

> Note: because you installed PostCSS plugin, you can now import any external css file the same way.

## Usage

Just import the necessary components from the svelte-chota package in your components:

```html
<script>
    import {Input,Button} from 'svelte-chota';
</script>

<Input placeholder="What do you want?" /> <Button>Find</Button>
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

Any attribute can be passed to the component, even the `class` attribute.

```html
<script>
    import {Card} from 'svelte-chota';
</script>

<Card class="is-rounded text-center" style="height:100px; width:100px" title="Hello">
    <h1>Hey!</h1>
</Card>
```
