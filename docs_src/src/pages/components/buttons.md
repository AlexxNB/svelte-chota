# Buttons

### Default buttons

```example script:hide
<script>
 import {Button} from 'svelte-chota';
 document.body.style
</script>
<Button>Default</Button>
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
<Button dark>Dark</Button>
<hr/>
<Button error>Error</Button>
<Button success>Success</Button>
```

### Outline buttons

```example script:hide
<script>
 import {Button} from 'svelte-chota';
</script>
<Button outline>Default</Button>
<Button primary outline>Primary</Button>
<Button secondary outline>Secondary</Button>
<Button dark outline>Dark</Button>
<Button clear>Clear</Button>
```

### Submit button 

```example script:hide
<script>
 import {Button} from 'svelte-chota';
</script>
<form>
    <Button submit>Send form</Button>
</form>
```


### Icon buttons

The properties `icon` and `iconRight` accept any [valid source](components/icon) for an icon. For example, you may use the [@mdi/js](https://www.npmjs.com/package/@mdi/js) package.

```example
<script>
 import {Button} from 'svelte-chota';
 import { mdiDelete,mdiAccountPlus,mdiSend } from '@mdi/js';
</script>

<Button primary icon={mdiAccountPlus}>Add User</Button>
<Button outline primary iconRight={mdiSend}>Submit</Button>
<Button error icon={mdiDelete} />
<Button secondary class="is-rounded" icon="static/icons/svelte.svg" />
```

### States

```example script:hide
<script>
 import {Button} from 'svelte-chota';
</script>
<Button loading>Loading</Button>
<Button loading error>Loading</Button>
<Button disabled>Disabled</Button>
<Button primary disabled>Disabled</Button>
```


### Dropdown button

```example script:hide height:130
<script>
 import {Button,Input} from 'svelte-chota';
 import { mdiWhiteBalanceSunny } from '@mdi/js';
</script>
<Button dropdown="Brightness" outline icon={mdiWhiteBalanceSunny}>
    <Input range min="1" max="100" step="10" />
</Button>
```


##### Autoclose

With the `autoclose` property the dropdown will close when clicked inside it.

```example script:hide height:200
<script>
 import {Button,Tag} from 'svelte-chota';
 import { mdiChevronDown } from '@mdi/js';
</script>
<Button dropdown="My Profile" autoclose outline iconRight={mdiChevronDown}>
    <p><a href="/">Edit</a></p>
    <p><a href="/">Alerts&nbsp;<Tag>3</Tag></a></p>
    <hr>
    <p><a href="/" class="text-error">Logout</a></p>
</Button>
```

##### Open

The `open` property sets the state of the dropdown's visibility.

```example height:230
<script>
 import {Button} from 'svelte-chota';
 let open = false;
 const close = () => open=false;
</script>
<Button dropdown="Login" bind:open outline>
    <p><input placeholder="username"></p>
    <p><input placeholder="password" type="password"></p>
    <p>
        <Button clear on:click={close}>Sign up</Button>
        <Button primary on:click={close}>Sign in</Button>
    </p>
</Button>
```
