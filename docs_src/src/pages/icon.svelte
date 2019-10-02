<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Icon} from './../../../cmp/index';
    import { mdiCardsSpade,mdiCardsClub,mdiCardsDiamond,mdiCardsHeart } from '@mdi/js';

</script>

<h1>Icon</h1>

<p><code>Icon</code> component is a wrapper for <a href="https://www.npmjs.com/package/mdi-svelte" target="_blank">mdi-svelte</a> package.</p>
<p>You can view the full demo <a href="https://alexxnb.github.io/mdi-svelte/demo/dist/index.html" target="_blank">here</a>.</p>

<p>You should put SVG-path into the <code>path</code> property. 
There are a lot of icons packages which provide SVG-path for them. 
For example, you can use <a href="https://www.npmjs.com/package/@mdi/js" target="_blank">@mdi/js</a> package.</p>

<Snippet code={`
<script>
    import { mdiCardsSpade,mdiCardsClub,mdiCardsDiamond,mdiCardsHeart } from '@mdi/js';
</script>

<Icon path={mdiCardsSpade} color="black" size="3"/>
<Icon path={mdiCardsClub} color="#000000"  size="3" spin/>
<Icon path={mdiCardsDiamond} color="red" size="3" spin="-1"/>
<Icon path={mdiCardsHeart} color="rgb(255,0,0)" size="3"/>
`}>
    <Icon path={mdiCardsSpade} color="black" size="3"/>
	<Icon path={mdiCardsClub} color="#000000"  size="3" spin/>
	<Icon path={mdiCardsDiamond} color="red" size="3" spin="-1"/>
	<Icon path={mdiCardsHeart} color="rgb(255,0,0)" size="3"/>
</Snippet>