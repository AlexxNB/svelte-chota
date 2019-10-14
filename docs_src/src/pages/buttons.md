<script>
    import Example from './../cmp/Example.svelte';
    import {Button,Tag,Row,Col,Icon,Input} from './../../../cmp/index';

    import { mdiDelete,mdiAccountPlus,mdiSend,mdiChevronDown,mdiWhiteBalanceSunny } from '@mdi/js'; 

    let dropdown = false;
</script>

# Buttons

### Default buttons

<Example>
    <div slot="text">
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button dark>Dark</Button>
        <Button error>Error</Button>
        <Button success>Success</Button>
    </div>
    <div slot="code">
        ```html
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button dark>Dark</Button>
        <Button error>Error</Button>
        <Button success>Success</Button>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        ```
    </div>
</Example>

### Outline buttons

<Example>
    <div slot="text">
        <Button outline>Default</Button>
        <Button primary outline>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button dark outline>Dark</Button>
        <Button clear>Clear</Button>
    </div>
    <div slot="code">
        ```html
        <Button outline>Default</Button>
        <Button primary outline>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button dark outline>Dark</Button>
        <Button clear>Clear</Button>
        ```
    </div>
</Example>


### Submit button 

<Example>
    <div slot="text">
        <form action="#top">
            <Button submit>Send form</Button>
        </form>
    </div>
    <div slot="code">
        ```html
        <form>
            <Button submit>Send form</Button>
        </form>
        ```
    </div>
</Example>


### Icon buttons

Properties `icon` or `iconRight` accepts any [valid source](#icon) for icon. For example, you may use [@mdi/js](https://www.npmjs.com/package/@mdi/js) package.

<Example>
    <div slot="text">
        <Button primary icon={mdiAccountPlus}>Add User</Button> 
        <Button outline primary iconRight={mdiSend}>Submit</Button> 
        <Button error icon={mdiDelete} /> 
        <Button secondary class="is-rounded" icon="icons/svelte.svg" />
    </div>
    <div slot="code">
        ```html
        <script>
            import { mdiDelete,mdiAccountPlus,mdiSend } from '@mdi/js';
        </script>

        <Button primary icon={mdiAccountPlus}>Add User</Button>
        <Button outline primary iconRight={mdiSend}>Submit</Button>
        <Button error icon={mdiDelete} />
        <Button secondary class="is-rounded" icon="icons/svelte.svg" />
        ```
    </div>
</Example>


### States

<Example>
    <div slot="text">
        <Button loading>Loading</Button>
        <Button loading error>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button primary disabled>Disabled</Button>
    </div>
    <div slot="code">
        ```html
        <Button loading>Loading</Button>
        <Button loading error>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button primary disabled>Disabled</Button>
        ```
    </div>
</Example>


### Dropdown button

<Example>
    <div slot="text">
        <Button dropdown="Brightness" outline icon={mdiWhiteBalanceSunny}>
            <Input range min="1" max="100" step="10" />
        </Button>
    </div>
    <div slot="code">
        ```html
        <Button dropdown="Brightness" outline icon={mdiWhiteBalanceSunny}>
            <Input range min="1" max="100" step="10" />
        </Button>
        ```
    </div>
</Example>


##### Autoclose

With the `autoclose` property dropdown will be closed when clicked inside it.

<Example>
    <div slot="text">
        <Button dropdown="My Profile" autoclose  outline iconRight={mdiChevronDown}>
            <p><a href="#1">Edit</a></p>
            <p><a href="#2">Alerts&nbsp;<Tag>3</Tag></a></p>
            <hr>
            <p><a href="#3" class="text-error">Logout</a></p>
        </Button>
    </div>
    <div slot="code">
        ```html
        <script>
            import { mdiChevronDown } from '@mdi/js';
        </script>

        <Button dropdown="My Profile" autoclose outline iconRight={mdiChevronDown}>
            <p><a href="/">Edit</a></p>
            <p><a href="/">Alerts&nbsp;<Tag>3</Tag></a></p>
            <hr>
            <p><a href="/" class="text-error">Logout</a></p>
        </Button>
        ```
    </div>
</Example>

##### Open

The `open` property sets the state of the dropdown visibility.

<Example>
    <div slot="text">
        <Button dropdown="Login" bind:open={dropdown} outline>
            <Row>
                <Col size="12"><input placeholder="username"></Col>
                <Col size="12"><input placeholder="password" type="password"></Col>
                <Col size="12">
                    <Button clear on:click={e=>dropdown=false}>Sign up</Button>
                    <Button primary on:click={e=>dropdown=false}>Sign in</Button>
                </Col>
            </Row>
        </Button>
    </div>
    <div slot="code">
        ```html
        <script>
            let open = false;
            const close = () => open=false;
        </script>

        <Button dropdown="Login" bind:open outline>
            <Row>
                <Col size="12"><input placeholder="username"></Col>
                <Col size="12"><input placeholder="password" type="password"></Col>
                <Col size="12">
                    <Button clear on:click={close}>Sign up</Button>
                    <Button primary on:click={close}>Sign in</Button>
                </Col>
            </Row>
        </Button>
        ```
    </div>
</Example>