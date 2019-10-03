<script>
    import Snippet from './../cmp/Snippet.svelte';
</script>
<h1>Installation</h1>

<p>Instruction is applieble for recommended <a href="https://github.com/sveltejs/template" target="_blank">template</a>.</p>


<h3>Install packages</h3>
<Snippet code={`
npm install --save chota svelte-chota rollup-plugin-postcss
`}>

<p>You should install three packages:</p>
<ul>
    <li><code>chota</code> - css framework itself</li>
    <li><code>svelte-chota</code> - Svelte components for chota</li>
    <li><code>rollup-plugin-postcss</code> - allows import css files inside your components and pack it in the bundle.</li>
</ul>

</Snippet>


<h3>Rollup config</h3>
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

<p>Open the <code>rollup.config.js</code> file and edit the config as shown.</p>
<p>There we adding PostCSS plugin to pack all component's incapsulated CSS and imported CSS files in a single <code>bundle.css</code></p>
</Snippet>


<h3>Importing chota</h3>
<Snippet code={`
<script>
    import "chota";
</script>
`}>

<p>Now you can import chota in the root <code>App.svelte</code> file</p>
<p><i>Note: because you installed PostCSS plugin, now you can import any external css file same way.</i></p>
</Snippet>

<h2>Import from CDN</h2>
<p>Another way to import chota without Rollup's config changing is using CDN. In this case internet connection required for users of your app.</p>

<Snippet code={`
npm install --save svelte-chota
`}>

1. Install <code>svelte-chota</code>

</Snippet>

<Snippet code={`
<style>
  @import "https://unpkg.com/chota@latest";
</style>
`}>

2. Import styles from chota's CDN in the <code>style</code> block of the your <code>App.svelte</code>.

</Snippet>

<p><i>This way is ideal for using with sandboxes. See example on the <a href="https://svelte.dev/repl/23f96be8ef424e12b584f9ed00761e88?version=3.12.1" target="_blank">REPL</a></i></p>
