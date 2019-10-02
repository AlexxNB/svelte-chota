<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Tag} from './../../../cmp/index';
</script>

<h1>Tag</h1>

<Snippet code={`
<Tag>One</Tag>
<Tag>Two</Tag>
<Tag>Three</Tag>
<Tag small>Small</Tag>
<Tag large>Large</Tag>
`}>
    <Tag>One</Tag>
    <Tag>Two</Tag>
    <Tag>Three</Tag>
    <Tag small>Small</Tag>
    <Tag large>Large</Tag>
</Snippet>