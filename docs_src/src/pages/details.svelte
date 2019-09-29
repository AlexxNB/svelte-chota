<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Details,Button} from './../../../index';
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