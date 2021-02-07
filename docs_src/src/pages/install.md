import Details from '@INCLUDES/Details.svelte';

# Installation

You have two ways to start working with `chota` and `svelte-chota`. Instructions are applieble for official [template](https://github.com/sveltejs/template).


<Details title="a. Import CSS file in your root component"
    comment="Recommended way"
>

1.&nbsp;You should install two packages:

* `chota` - css framework itself
* `svelte-chota` - Svelte components for chota

```shell
$ npm install -D chota svelte-chota
```

2.&nbsp;Then open you root app file (usually `App.svelte`) and add the `chota` import at the top of a `<script>` block.

```html
<script>
    import 'chota';
    ...
</script>
```
</Details>

<Details
    title="c. Import from CDN"
    comment="The easiest way"
>

Another way to import `chota` without Rollup's config changing is using CDN. In this case internet connection required for users of your app.

1.&nbsp;Install `svelte-chota`  

```shell
$ npm install --save svelte-chota
```

2.&nbsp;Import styles from chota's CDN in the `style` block of the your `App.svelte`.

```html
<style>
    @import "https://unpkg.com/chota@latest";
</style>
```

> This way is ideal for using with sandboxes. See example on the [REPL](https://svelte.dev/repl/23f96be8ef424e12b584f9ed00761e88?version=3.12.1)
</Details>
