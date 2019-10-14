
import Example from './../cmp/Example.svelte';
import Details from './../cmp/Details.svelte';


# Installation

You have three ways to start working with `chota` and `svelte-chota`. Instructions are applieble for official [template](https://github.com/sveltejs/template).


<Details
    title="a. Import with Rollup plugin"
    comment="Recommended way"
    open
>

    <Example>
        <div slot="text">
            1.&nbsp;You should install three packages:

            * `chota` - css framework itself
            * `svelte-chota` - Svelte components for chota
            * `rollup-plugin-postcss` - allows import css files inside your components and pack it in the bundle.
        </div>
        <div slot="code">
            ```bash
            npm install --save chota svelte-chota rollup-plugin-postcss
            ```
        </div>
    </Example>

    <Example>
        <div slot="text">
            2.&nbsp;Open the `rollup.config.js` file and edit the config as shown. There we adding PostCSS plugin to pack all component's incapsulated CSS and imported CSS files in a single `bundle.css`.
        </div>
        <div slot="code">
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
        </div>
    </Example>


    <Example>
        <div slot="text">
            3.&nbsp;Now you can import chota in the root `App.svelte` file
        </div>
        <div slot="code">
            ```html 
            <script>
                import "chota";
            </script>
            ```
        </div>
    </Example>


</Details>


<Details
    title="b. Download chota CSS"
    comment="Easy way"
>

Instead installing Rollup's plugin, you can just download `chota.css` and include it in your `index.html` file.

    <Example>
        <div slot="text">
            1.&nbsp;Install `svelte-chota`      
        </div>
        <div slot="code">
            ```bash
            npm install --save svelte-chota
            ```
        </div>
    </Example>

    <Example>
        <div slot="text">
            2.&nbsp;[Download](https://unpkg.com/chota@latest) `chota.min.css` and place it near your `global.css` in the `public` directory.    
        </div>
        <div slot="code">
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
        </div>
    </Example>

    <Example>
        <div slot="text">
            3.&nbsp;Add the link for the style into the `public/index.html` file above `global.css` and `bundle.css` links.   
        </div>
        <div slot="code">
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
        </div>
    </Example>


</Details>

<Details
    title="c. Import from CDN"
    comment="The easiest way"
>

Another way to import `chota` without Rollup's config changing is using CDN. In this case internet connection required for users of your app.

    <Example>
        <div slot="text">
            1.&nbsp;Install `svelte-chota`      
        </div>
        <div slot="code">
            ```bash
            npm install --save svelte-chota
            ```
        </div>
    </Example>

    <Example>
        <div slot="text">
            2.&nbsp;Import styles from chota's CDN in the `style` block of the your `App.svelte`.     
        </div>
        <div slot="code">
            ```html
            <style>
                @import "https://unpkg.com/chota@latest";
            </style>
            ```
        </div>
    </Example>

    > This way is ideal for using with sandboxes. See example on the [REPL](https://svelte.dev/repl/23f96be8ef424e12b584f9ed00761e88?version=3.12.1)

</Details>