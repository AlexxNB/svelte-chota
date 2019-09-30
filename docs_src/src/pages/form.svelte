<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Input,Field,Button} from './../../../index';
    import { mdiMagnify,mdiFormatBold,mdiFormatItalic, mdiFormatUnderline,mdiFormatColorFill } from '@mdi/js'; 

    let error = false;
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