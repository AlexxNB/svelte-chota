<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Details,Button} from './../../../cmp/index';
</script>

<h1>Details</h1>

<Snippet code={`
<Details>
    <span slot="summary">StarWars spoiler</span>
    Han Solo died...
</Details>
`}>
    <Details>
        <span slot="summary">StarWars spoiler</span>
        Han Solo died...
    </Details>
</Snippet>

<h3>open</h3>

<p>The <code>open</code> property allows to open details by default</p>

<Snippet code={`
<Details>
    <span slot="summary">The GoT spoiler</span>
    Everybody died...
</Details>
`}>
    <Details open>
    <span slot="summary">The GoT spoiler</span>
        Everybody died...
    </Details>
</Snippet>