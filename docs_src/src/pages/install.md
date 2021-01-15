import Details from '@INCLUDES/Details.svelte';

# Installation

There are three ways to start working with `chota` and `svelte-chota`. Instructions are applicable to the official [template](https://github.com/sveltejs/template).


<Details title="a. Import with Rollup plugin"
    comment="Recommended way"
>

1.&nbsp;You should install three packages:

* `chota` - css framework itself
* `svelte-chota` - Svelte components for chota
* `rollup-plugin-postcss` - allows you to import css files inside your components and then pack it in the bundle

```shell
$ npm install -D chota svelte-chota rollup-plugin-postcss
```

2.&nbsp;Open the `rollup.config.js` file and edit the config as shown. Here we are adding *PostCSS* plugin to pack all components' incapsulated CSS and imported CSS files into a single `bundle.css`.

```js
...
// import css plugin at the top of the file
import postcss from 'rollup-plugin-postcss';
...

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
    ...
}
```
</Details>


<Details
    title="b. Download chota CSS"
    comment="Easy way"
>

Instead of installing Rollup's plugin, you can just download `chota.css` and include it in your `index.html` file.

1.&nbsp;Install `svelte-chota`    

```shell
$ npm install --save svelte-chota
```

2.&nbsp;[Download](https://unpkg.com/chota@latest) `chota.min.css` and place it near your `global.css` in the `public` directory. 

```js
// Svelte-template files
svelte-template
|-public
|   |-chota.min.css //<- put it here
|   |-favicon.png
|   |-global.css
|   |-index.html
|  
|-src  
```

3.&nbsp;Add the link for the stylesheet in the `public/index.html` file above `global.css` and `bundle.css` links.

```html
<!-- index.html -->
<html>
    <head>
        ...
        <!-- Add it above other styles -->
        <link rel='stylesheet' href='chota.min.css'>   

        <link rel='stylesheet' href='global.css'>   
        <link rel='stylesheet' href='bundle.css'>   
    </head>
    ... 
```
</Details>

<Details
    title="c. Import from CDN"
    comment="The easiest way"
>

Another way to import `chota` without changing Rollup's config is using a CDN. In this case an internet connection is required for users of your app.

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
