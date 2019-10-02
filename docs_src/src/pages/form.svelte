<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Input,Field,Button, Radio, Checkbox} from './../../../cmp/index';
    import { mdiMagnify,mdiFormatBold,mdiFormatItalic, mdiFormatUnderline,mdiFormatColorFill } from '@mdi/js'; 

    let error = false;
    let radiovalue = 'second';
    let radiovalue2 = 'third';
    let cbvalue = ['second'];
    let cbvalue2 = [];
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

<h4>States</h4>

<Snippet code={`
<p><Input error value="There is error"/></p>
<p><Input success value="There is ok"/></p>
<p><Input disabled value="Disabled"/></p>
`}>
    <p><Input error value="There is error"/></p>
    <p><Input success value="There is ok"/></p>
    <p><Input disabled value="Disabled"/></p>
</Snippet>


<h3>Field</h3>

<Snippet code={`
<Field label="Your name">
    <Input value="Rich"/>
</Field>

<Field label="Username" success="User exists">
    <Input value="admin"/>
</Field>

<Field label="Password" error="Wrong password">
    <Input password value="admin"/>
</Field>
`}>
    <Field label="Your name">
        <Input value="Rich"/>
    </Field>
    <Field label="Username" success="User exists">
        <Input value="admin"/>
    </Field>
    <Field label="Password" error="Wrong password">
        <Input password value="admin"/>
    </Field>
</Snippet>

<h4>Grouped</h4>

<Snippet code={`
<script>
    let error = false;
</script>

<Field grouped {error}>
    <Input placeholder="Username"/>
    <Input password placeholder="Password"/>
    <Button 
        on:click={e=>error = (!!error) ? false : "Wrong credentials"}
    >Login (Press me)</Button>
</Field>
`}>
    <Field grouped {error}>
        <Input placeholder="Username"/>
        <Input password placeholder="Password"/>
        <Button on:click={e=>error = (!!error) ? false : "Wrong credentials"}>Login (Press me)</Button>
    </Field>
</Snippet>

<h4>Gapples</h4>

<Snippet code={`
<script>
    import { mdiMagnify } from '@mdi/js'; 
</script>

<Field gapless>
    <Input placeholder="Search"/>
    <Button icon={mdiMagnify} primary/>
</Field>
`}>
    <Field gapless>
        <Input placeholder="Search"/>
        <Button icon={mdiMagnify} primary/>
    </Field>
</Snippet>

<Snippet code={`
<script>
    import { 
        mdiFormatBold,
        mdiFormatItalic, 
        mdiFormatUnderline,
        mdiFormatColorFill 
    } from '@mdi/js'; 
</script>

<Field gapless>
    <Button icon={mdiFormatBold} outline/>
    <Button icon={mdiFormatItalic} outline/>
    <Button icon={mdiFormatUnderline} outline/>
    <Button icon={mdiFormatColorFill} outline/>
    <Input placeholder="Formated text here"/>
</Field>
`}>
    <Field gapless>
        <Button icon={mdiFormatBold} outline/>
        <Button icon={mdiFormatItalic} outline/>
        <Button icon={mdiFormatUnderline} outline/>
        <Button icon={mdiFormatColorFill} outline/>
        <Input placeholder="Formated text here"/>
    </Field>
</Snippet>

<h3>Radiobutton</h3>

<Snippet code={`
<script>
    let radiovalue = 'second';
</script>

<Radio value="first" bind:group={radiovalue}/> - first,
<Radio value="second" bind:group={radiovalue}/> - second
<p>Selected: {radiovalue}</p>
`}>
    <Radio value="first" bind:group={radiovalue}/> - first,
    <Radio value="second" bind:group={radiovalue}/> - second
    <p>Selected : {radiovalue}</p>
</Snippet>

<h4>Labeled radiobuttons</h4>

<Snippet code={`
<script>
    let radiovalue;
</script>

<Radio value="first" bind:group={radiovalue}>First</Radio>
<Radio value="second" bind:group={radiovalue}>Second</Radio>
<Radio value="third" bind:group={radiovalue}>Third</Radio>
<p>Selected: {radiovalue}</p>
`}>
    <Radio value="first"  bind:group={radiovalue2}>First</Radio>
    <Radio value="second" bind:group={radiovalue2}>Second</Radio>
    <Radio value="third" bind:group={radiovalue2}>Third</Radio>
    <p>Selected : {radiovalue2}</p>
</Snippet>

<h3>Checkbox</h3>

<Snippet code={`
<script>
    let cbvalue = ['second'];
</script>

<Checkbox value="first" bind:group={cbvalue}/> - first,
<Checkbox value="second" bind:group={cbvalue}/> - second
<p>Selected: {cbvalue}</p>
`}>
    <Checkbox value="first" bind:group={cbvalue}/> - first,
    <Checkbox value="second" bind:group={cbvalue}/> - second
    <p>Selected: {cbvalue}</p>
</Snippet>

<h4>Labeled checkbox</h4>

<Snippet code={`
<script>
    let cbvalue = [];
</script>

<Checkbox value="first" checked bind:group={cbvalue}>First</Checkbox>
<Checkbox value="second" bind:group={cbvalue}>Second</Checkbox>
<p>Selected: {cbvalue}</p>
`}>
    <Checkbox value="first" checked bind:group={cbvalue2}>First</Checkbox>
    <Checkbox value="second" bind:group={cbvalue2}>Second</Checkbox>
    <p>Selected: {cbvalue2}</p>
</Snippet>


<h3>Selects</h3>

<p>Actualy selects doesn't have a component version. Just use as is.</p>

<Snippet code={`
<select>
    <option disabled selected>Choose</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
`}>
    <select>
        <option disabled selected>Choose</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</Snippet>