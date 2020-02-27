# Form

### Inputs

```example script:hide
<script>
 import {Input} from 'svelte-chota';
</script>
<p><Input placeholder="Your name?"/></p>
<p><Input password placeholder="Your password?"/></p>
<p><Input date value="1985-12-03"/></p>
<p><Input color value="#ff3e00"/></p>
<p><Input number value="5" min="0" max="10"/></p>
<p><Input type="range" value="9" min="0" max="10"/></p>
<p><Input textarea placeholder="Textarea"/></p>
```



#### States

```example script:hide
<script>
 import {Input} from 'svelte-chota';
</script>
<p><Input error value="There is error"/></p>
<p><Input success value="There is ok"/></p>
<p><Input disabled value="Disabled"/></p>
```

### Field

```example script:hide
<script>
 import {Input,Field} from 'svelte-chota';
</script>
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



#### Grouped

```example
<script>
 import { Input,Field,Button } from 'svelte-chota';
 let error = false;
</script>

<Field grouped {error}>
    <Input placeholder="Username"/>
    <Input password placeholder="Password"/>
    <Button 
        on:click={e=>error = (!!error) ? false : "Wrong credentials"}
    >Press me</Button>
</Field>
```

#### Gapless

```example 
<script>
 import { Input,Field,Button } from 'svelte-chota';
 import { mdiMagnify } from '@mdi/js';
</script>

<Field gapless>
    <Input placeholder="Search"/>
    <Button icon={mdiMagnify} primary/>
</Field>
```

```example
<script>
 import { Input,Field,Button } from 'svelte-chota';
 import { mdiFormatBold,mdiFormatItalic,mdiFormatUnderline } from '@mdi/js';
</script>

<Field gapless>
    <Button icon={mdiFormatBold} outline/>
    <Button icon={mdiFormatItalic} outline/>
    <Button icon={mdiFormatUnderline} outline/>
    <Input placeholder="Formated text here"/>
</Field>
```



### Radiobutton

```example
<script>
 import {Radio} from 'svelte-chota';
 let radiovalue = 'second';
</script>

<Radio value="first" bind:group={radiovalue}/> - first,
<Radio value="second" bind:group={radiovalue}/> - second
<p>Selected: {radiovalue}</p>
```

#### Labeled radiobuttons

```example
<script>
 import {Radio} from 'svelte-chota';
 let radiovalue = 'third';
</script>

<Radio value="first" bind:group={radiovalue}>First</Radio>
<Radio value="second" bind:group={radiovalue}>Second</Radio>
<Radio value="third" bind:group={radiovalue}>Third</Radio>
<p>Selected: {radiovalue}</p>
```



### Checkbox

```example
<script>
 import {Checkbox} from 'svelte-chota';
 let cbvalue = ['second'];
</script>

<Checkbox value="first" bind:group={cbvalue}/> - first,
<Checkbox value="second" bind:group={cbvalue}/> - second
<p>Selected: {cbvalue}</p>
```


#### Labeled checkbox

```example script:hide
<script>
 import {Checkbox} from 'svelte-chota';
 let cbvalue = [];
</script>

<Checkbox value="first" bind:group={cbvalue}>First</Checkbox>
<Checkbox value="second" bind:group={cbvalue}>Second</Checkbox>
<p>Selected: {cbvalue}</p>
```


### Selects

Actualy selects doesn't have a component version. Just use as is.

```example
<select>
    <option disabled selected>Choose</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```