<script>
    import Example from './../cmp/Example.svelte';
    import {Input,Field,Button, Radio, Checkbox} from './../../../cmp/index';
    import { mdiMagnify,mdiFormatBold,mdiFormatItalic, mdiFormatUnderline,mdiFormatColorFill } from '@mdi/js'; 

    let error = false;
    let radiovalue = 'second';
    let radiovalue2 = 'third';
    let cbvalue = ['second'];
    let cbvalue2 = [];
</script>

# Form

### Inputs

<Example>
    <div slot="text">
        <p><Input placeholder="Your name?"/></p>
        <p><Input password placeholder="Your password?"/></p>
        <p><Input date value="1985-12-03"/></p>
        <p><Input color value="#ff3e00"/></p>
        <p><Input number value="5" min="0" max="10"/></p>
        <p><Input type="range" value="9" min="0" max="10"/></p>
        <p><Input textarea placeholder="Textarea"/></p>
    </div>
    <div slot="code">
        ```html
        <p><Input placeholder="Your name?"/></p>
        <p><Input password placeholder="Your password?"/></p>
        <p><Input date value="1985-12-03"/></p>
        <p><Input color value="#ff3e00"/></p>
        <p><Input number value="5" min="0" max="10"/></p>
        <p><Input type="range" value="9" min="0" max="10"/></p>
        <p><Input textarea placeholder="Textarea"/></p>
        ```
    </div>
</Example>


#### States

<Example>
    <div slot="text">
        <p><Input error value="There is error"/></p>
        <p><Input success value="There is ok"/></p>
        <p><Input disabled value="Disabled"/></p>
    </div>
    <div slot="code">
        ```html
        <p><Input error value="There is error"/></p>
        <p><Input success value="There is ok"/></p>
        <p><Input disabled value="Disabled"/></p>
        ```
    </div>
</Example>


### Field

<Example>
    <div slot="text">
        <Field label="Your name">
            <Input value="Rich"/>
        </Field>
        <Field label="Username" success="User exists">
            <Input value="admin"/>
        </Field>
        <Field label="Password" error="Wrong password">
            <Input password value="admin"/>
        </Field>
    </div>
    <div slot="code">
        ```html
        <Field label="Your name">
            <Input value="Rich"/>
        </Field>

        <Field label="Username" success="User exists">
            <Input value="admin"/>
        </Field>

        <Field label="Password" error="Wrong password">
            <Input password value="admin"/>
        </Field>
        ```
    </div>
</Example>



#### Grouped

<Example>
    <div slot="text">
        <Field grouped {error}><Input placeholder="Username"/><Input password placeholder="Password"/><Button on:click={e=>error = (!!error) ? false : "Wrong credentials"}>Login (Press me)</Button></Field>
    </div>
    <div slot="code">
        ```html
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
        ```
    </div>
</Example>

#### Gapless

<Example>
    <div slot="text">
        <Field gapless><Input placeholder="Search"/><Button icon={mdiMagnify} primary/></Field>
    </div>
    <div slot="code">
        ```html
        <script>
            import { mdiMagnify } from '@mdi/js'; 
        </script>

        <Field gapless>
            <Input placeholder="Search"/>
            <Button icon={mdiMagnify} primary/>
        </Field>
        ```
    </div>
</Example>

<Example>
    <div slot="text">
        <Field gapless><Button icon={mdiFormatBold} outline/><Button icon={mdiFormatItalic} outline/><Button icon={mdiFormatUnderline} outline/><Input placeholder="Formated text here"/></Field>
    </div>
    <div slot="code">
        ```html
        <script>
            import { 
                mdiFormatBold,
                mdiFormatItalic, 
                mdiFormatUnderline
            } from '@mdi/js'; 
        </script>

        <Field gapless>
            <Button icon={mdiFormatBold} outline/>
            <Button icon={mdiFormatItalic} outline/>
            <Button icon={mdiFormatUnderline} outline/>
            <Input placeholder="Formated text here"/>
        </Field>
        ```
    </div>
</Example>


### Radiobutton

<Example>
    <div slot="text">
        <Radio value="first" bind:group={radiovalue}/> - first,
        <Radio value="second" bind:group={radiovalue}/> - second

        Selected: {radiovalue}
    </div>
    <div slot="code">
        ```html
        <script>
            let radiovalue = 'second';
        </script>

        <Radio value="first" bind:group={radiovalue}/> - first,
        <Radio value="second" bind:group={radiovalue}/> - second
        <p>Selected: {radiovalue}</p>
        ```
    </div>
</Example>


#### Labeled radiobuttons

<Example>
    <div slot="text">
        <Radio value="first"  bind:group={radiovalue2}>First</Radio>
        <Radio value="second" bind:group={radiovalue2}>Second</Radio>
        <Radio value="third" bind:group={radiovalue2}>Third</Radio>

        Selected: {radiovalue2}
    </div>
    <div slot="code">
        ```html
        <script>
            let radiovalue;
        </script>

        <Radio value="first" bind:group={radiovalue}>First</Radio>
        <Radio value="second" bind:group={radiovalue}>Second</Radio>
        <Radio value="third" bind:group={radiovalue}>Third</Radio>
        <p>Selected: {radiovalue}</p>
        ```
    </div>
</Example>


### Checkbox

<Example>
    <div slot="text">
        <Checkbox value="first" bind:group={cbvalue}/> - first,
        <Checkbox value="second" bind:group={cbvalue}/> - second
        
        Selected: {cbvalue}
    </div>
    <div slot="code">
        ```html
        <script>
            let cbvalue = ['second'];
        </script>

        <Checkbox value="first" bind:group={cbvalue}/> - first,
        <Checkbox value="second" bind:group={cbvalue}/> - second
        <p>Selected: {cbvalue}</p>
        ```
    </div>
</Example>



#### Labeled checkbox

<Example>
    <div slot="text">
        <Checkbox value="first" checked bind:group={cbvalue2}>First</Checkbox>
        <Checkbox value="second" bind:group={cbvalue2}>Second</Checkbox>
        
        Selected: {cbvalue2}
    </div>
    <div slot="code">
        ```html
        <script>
            let cbvalue = [];
        </script>

        <Checkbox value="first" checked bind:group={cbvalue}>First</Checkbox>
        <Checkbox value="second" bind:group={cbvalue}>Second</Checkbox>
        <p>Selected: {cbvalue}</p>
        ```
    </div>
</Example>


### Selects

Actualy selects doesn't have a component version. Just use as is.

<Example>
    <div slot="text">
        <select>
            <option disabled selected>Choose</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div slot="code">
        ```html
        <select>
            <option disabled selected>Choose</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        ```
    </div>
</Example>