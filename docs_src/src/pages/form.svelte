<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Input} from './../../../index';
</script>

<h1>Form</h1>

<h3>Inputs</h3>

<Snippet code={`
<p><Input placeholder="Your name?"/></p>
<p><Input password placeholder="Your password?"/></p>
<p><Input date value="1985-12-03"/></p>
<p><Input color value="#ff3e00"/></p>
<p><Input number value="5" min="0" max="10"/></p>
<p><Input type="range" value="9" min="0" max="10"/></p>
<p><Input textarea placeholder="Textarea"/></p>
`}>
    <p><Input placeholder="Your name?"/></p>
    <p><Input password placeholder="Your password?"/></p>
    <p><Input date value="1985-12-03"/></p>
    <p><Input color value="#ff3e00"/></p>
    <p><Input number value="5" min="0" max="10"/></p>
    <p><Input type="range" value="9" min="0" max="10"/></p>
    <p><Input textarea placeholder="Textarea"/></p>
</Snippet>

<h3>States</h3>

<Snippet code={`
<p><Input error value="There is error"/></p>
<p><Input success value="There is ok"/></p>
<p><Input disabled value="Disabled"/></p>
`}>
    <p><Input error value="There is error"/></p>
    <p><Input success value="There is ok"/></p>
    <p><Input disabled value="Disabled"/></p>
</Snippet>