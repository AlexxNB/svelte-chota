import Details from '@INCLUDES/Details.svelte';

# Installation

You have two ways to start working with `chota` and `svelte-chota`. These instructions apply to the official [svelte template](https://github.com/sveltejs/template).


<Details title="a. Import CSS file in your root component"
    comment="Recommended way"
>

1.&nbsp;Install two node packages for development:

* `chota` - css framework itself
* `svelte-chota` - Svelte components for chota

```shell
$ npm install --save-dev chota svelte-chota
```

2.&nbsp;Open your root component file (usually `App.svelte`) and add the `chota` import at the top of a `<script>` block.

```html
<script>
    import 'chota';
    ...
</script>
```

</Details>


<Details
    title="c. Import from CDN"
    comment="Easiest way"
>

Another way to import `chota` without Rollup's config changing is using CDN. In this case an internet connection is required for users of your app.

1.&nbsp;Install `svelte-chota` for production:

```shell
$ npm install --save-prod svelte-chota
```

2.&nbsp;Import styles from chota's CDN in the `style` block of the your `App.svelte`.

```html
<style>
    @import "https://unpkg.com/chota@latest";
</style>
```

> This way is ideal for use in sandboxes. See example on the [REPL](https://svelte.dev/repl/23f96be8ef424e12b584f9ed00761e88)
</Details>
