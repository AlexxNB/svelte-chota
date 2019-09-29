<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Button} from './../../../index';

    import { mdiDelete,mdiAccountPlus,mdiSend } from '@mdi/js'; 
</script>

<h1>Buttons</h1>

<h3>Default buttons</h3>

<Snippet code={`
<Button>Default</Button>
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
<Button dark>Dark</Button>
<Button error>Error</Button>
<Button success>Success</Button>
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
`}>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button dark>Dark</Button>
    <Button error>Error</Button>
    <Button success>Success</Button>
</Snippet>

<h3>Outline buttons</h3>

<Snippet code={`
<Button outline>Default</Button>
<Button primary outline>Primary</Button>
<Button secondary outline>Secondary</Button>
<Button dark outline>Dark</Button>
<Button clear>Clear</Button>
`}>
    <Button outline>Default</Button>
    <Button primary outline>Primary</Button>
    <Button secondary outline>Secondary</Button>
    <Button dark outline>Dark</Button>
    <Button clear>Clear</Button>
</Snippet>


<h3>Icon buttons</h3>

<p>Properties <code>icon</code> or <code>iconRight</code> accepts any SVG path for icon. 
As example, you can use <a target="_blank"  href="https://www.npmjs.com/package/@mdi/js">@mdi/js</a> package. But you are free to use any other.</p>

<Snippet code={`
<script>
    import { mdiDelete,mdiAccountPlus,mdiSend } from '@mdi/js';
</script>

<Button primary icon={mdiAccountPlus}>Add User</Button>
<Button outline primary iconRight={mdiSend}>Submit</Button>
<Button error icon={mdiDelete} />
`}>
    <Button primary icon={mdiAccountPlus}>Add User</Button>
    <Button outline primary iconRight={mdiSend}>Submit</Button>
    <Button error icon={mdiDelete} />
</Snippet>

<h3>States</h3>

<Snippet code={`
<Button loading>Loading</Button>
<Button loading error>Loading</Button>
<Button disabled>Disabled</Button>
<Button primary disabled>Disabled</Button>
`}>
    <Button loading>Loading</Button>
    <Button loading error>Loading</Button>
    <Button disabled>Disabled</Button>
    <Button primary disabled>Disabled</Button>
</Snippet>