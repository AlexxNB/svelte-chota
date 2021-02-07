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

You should install two packages:

* `chota` - css framework itself
* `svelte-chota` - Svelte components for chota

```bash
npm install -D chota svelte-chota
```

Then open the app root file (usually `App.svelte`) and add `chota` import at the top of a `<script>` block:

```html
<script>
    import 'chota';
    ...
</script>
```

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
