<script>
    import Snippet from './../cmp/Snippet.svelte';
    import { Details } from './../../../cmp/index';
</script>

<h1>Installation</h1>

<p>
    You have three ways to start working with <code>chota</code> and <code>svelte-chota</code>. Instructions are applieble for official <a href="https://github.com/sveltejs/template" target="_blank">template</a>.
</p>


<Details open>
        <h3 slot="summary" class="summary">a. Import with Rollup plugin</h3>
        <p slot="summary" class="comment">Recommended way</p>
    
    <Snippet code={`
npm install --save chota svelte-chota rollup-plugin-postcss
    `}>
        <p>1. You should install three packages:</p>
        <ul>
            <li><code>chota</code> - css framework itself</li>
            <li><code>svelte-chota</code> - Svelte components for chota</li>
            <li><code>rollup-plugin-postcss</code> - allows import css files inside your components and pack it in the bundle.</li>
        </ul>
    </Snippet>

    <Snippet lang="javascript" code={`
...
// import css plugin at the top of the file
import postcss from 'rollup-plugin-postcss';
....

const production = !process.env.ROLLUP_WATCH;

export default {
    ...
    plugins: [
        ...
        svelte({
            ...
            // replace 'css.write('public/bundle.css',!production);' by
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
    `}>
    <p>
        2. Open the <code>rollup.config.js</code> file and edit the config as shown. There we adding PostCSS plugin to pack all component's incapsulated CSS and imported CSS files in a single <code>bundle.css</code>.
    </p>
    </Snippet>

    <Snippet code={`
<script>
    import "chota";
</script>
    `}>
        <p>
            3. Now you can import chota in the root <code>App.svelte</code> file
        </p>
        <p>
            <i>Note: because you installed PostCSS plugin, now you can import any external css file same way.</i>
        </p>
    </Snippet>
</Details>

<Details>
    <h3 slot="summary" class="summary">b. Download chota CSS</h3>
    <p slot="summary" class="comment">Easy way</p>

    <p>
        Instead installing Rollup's plugin, you can just download <code>chota.css</code> and include it in your <code>index.html</code> file.
    </p>

    <Snippet code={`
    npm install --save svelte-chota
    `}>
        <p>
            1. Install <code>svelte-chota</code>
        </p>
    </Snippet>

    <Snippet lang="javascript" code={`
// Svelte-template files
svelte-template
|-public
|   |-chota.min.css //<- put it here
|   |-favicon.png
|   |-global.css
|   |-index.html
|  
|-src    
    `}>
        <p>
            2. <a href="https://unpkg.com/chota@latest" target="_blank">Download</a> <code>chota.min.css</code> and place it near your <code>global.css</code> in the <code>public</code> directory.
        </p>
    </Snippet>

    <Snippet code={`
<!-- index.html -->
<html>
    <head>
    ...
        <!-- Add iti above other styles-->
        <link rel='stylesheet' href='chota.min.css'>   

        <link rel='stylesheet' href='global.css'>   
        <link rel='stylesheet' href='bundle.css'>   
    </head>
    ...
    `}>
        <p>
            3. Add the link for the style into the <code>public/index.html</code> file above <code>global.css</code> and <code>bundle.css</code> links.
        </p>
    </Snippet>
</Details>

<Details>
    <h3 slot="summary" class="summary">c. Import from CDN</h3>
    <p slot="summary" class="comment">The easiest way</p>

    <p>
        Another way to import chota without Rollup's config changing is using CDN. In this case internet connection required for users of your app.
    </p>

    <Snippet code={`
npm install --save svelte-chota
    `}>
        <p>
            1. Install <code>svelte-chota</code>
        </p>
    </Snippet>

    <Snippet code={`
<style>
    @import "https://unpkg.com/chota@latest";
</style>
    `}>
        <p>
            2. Import styles from chota's CDN in the <code>style</code> block of the your <code>App.svelte</code>.
        </p>
    </Snippet>

    <p>
        <i>This way is ideal for using with sandboxes. See example on the <a href="https://svelte.dev/repl/23f96be8ef424e12b584f9ed00761e88?version=3.12.1" target="_blank">REPL</a></i>
    </p>
</Details>

<style>
.summary{
    display:inline-block;
    margin:0px;
    padding:0px;
}
.comment{
    margin:-.8rem 0 1rem 4.2rem;
    padding:0px;
    color:var(--color-grey)
}
</style>