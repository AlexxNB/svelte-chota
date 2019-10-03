<script>
    import Snippet from './../cmp/Snippet.svelte';
</script>

<h1>Customization</h1>

<p>The <a href="https://jenil.github.io/chota/" target="_blank">chota</a> is cutomizing by setting CSS variables. See <a href="https://jenil.github.io/chota/#customizing" target="_blank">official docs</a> for more info.</p>

<Snippet  code={`
<style>
    :global(:root) {
        --color-primary: #14854F;
        --color-lightGrey: #d2d6dd;
        --color-grey: #747681;
        --color-darkGrey: #3f4144;
        --color-error: #d43939;
        --color-success: #28bd14;
        --grid-maxWidth: 120rem;
        --grid-gutter: 2rem;
        --font-size: 1.6rem;
        --font-family: "Helvetica Neue", sans-serif;
    }
</style>
`}>
You can set CSS variables in external *.css file or inside <code>App.svelte</code> using <code>:global</code> modifier.

</Snippet>