# svelte-chota
Svelte ui components based on Chota CSS framefork.

## Why chota?

When you decides to use [Svelte](https://svelte.dev) in your projects, you expects very tiny bundles of result code.

So the [chota](https://jenil.github.io/chota/) is a super light-weight CSS framework, which will add only ~3kb of gzipped code to your CSS bundle.

[Svelte-chota](https://github.com/AlexxNB/svelte-chota) is UI kit for easy using [chota](https://jenil.github.io/chota/) in your [Svelte](https://svelte.dev) projects.

## Documentation
* Svelte-chota [documentation](https://alexxnb.github.io/svelte-chota/docs).
* chota [documentation](https://jenil.github.io/chota/).

## Installation

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
            // REPLACE 'css.write('public/bundle.css',!production);' BY 'emitCss:true'
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

