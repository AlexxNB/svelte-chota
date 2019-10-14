
import Example from './../cmp/Example.svelte';


# Customization

The [chota](https://jenil.github.io/chota/) is cutomizing by setting CSS variables. See [official docs](https://jenil.github.io/chota/#customizing) for more info.

<Example>
    <div slot="text">
        You can set CSS variables in external _*.css_ file or inside `App.svelte` using `:global` modifier.
    </div>
    <div slot="code">
        ```html
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
        ```
    </div>
</Example>
