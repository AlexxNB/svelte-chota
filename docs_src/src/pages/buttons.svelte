<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Button,Tag,Row,Col,Icon,Input} from './../../../cmp/index';

    import { mdiDelete,mdiAccountPlus,mdiSend,mdiChevronDown,mdiWhiteBalanceSunny } from '@mdi/js'; 

    let dropdown = false;
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

<h3>Submit button</h3>

<Snippet code={`
<form>
    <Button submit>Send form</Button>
</form>
`}>
    <form action="#top">
        <Button submit>Send form</Button>
    </form>
</Snippet>


<h3>Icon buttons</h3>

<p>Properties <code>icon</code> or <code>iconRight</code> accepts any <a href="#icon">valid source</a> for icon. 
As example, you can use <a target="_blank"  href="https://www.npmjs.com/package/@mdi/js">@mdi/js</a> package. But you are free to use any other.</p>

<Snippet code={`
<script>
    import { mdiDelete,mdiAccountPlus,mdiSend } from '@mdi/js';
</script>

<Button primary icon={mdiAccountPlus}>Add User</Button>
<Button outline primary iconRight={mdiSend}>Submit</Button>
<Button error icon={mdiDelete} />
<Button secondary class="is-rounded" icon="icons/svelte.svg" />
`}>
    <Button primary icon={mdiAccountPlus}>Add User</Button>
    <Button outline primary iconRight={mdiSend}>Submit</Button>
    <Button error icon={mdiDelete} />
    <Button secondary class="is-rounded" icon="icons/svelte.svg" />
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


<h3>Dropdown button</h3>

<Snippet code={`
<Button dropdown="Brightness" outline icon={mdiWhiteBalanceSunny}>
    <Input range min="1" max="100" step="10" />
</Button>
`}>
    <Button dropdown="Brightness" outline icon={mdiWhiteBalanceSunny}>
        <Input range min="1" max="100" step="10" />
    </Button>
</Snippet>

<h5>Autoclose</h5>
<p>With the <code>autoclose</code> property dropdown will be closed when clicked inside it.</p> 

<Snippet code={`
<script>
    import { mdiChevronDown } from '@mdi/js';
</script>

<Button dropdown="My Profile" autoclose outline iconRight={mdiChevronDown}>
    <p><a href="/">Edit</a></p>
    <p><a href="/">Alerts&nbsp;<Tag>3</Tag></a></p>
    <hr>
    <p><a href="/" class="text-error">Logout</a></p>
</Button>
`}>
    <Button dropdown="My Profile" autoclose  outline iconRight={mdiChevronDown}>
        <p><a href="#1">Edit</a></p>
        <p><a href="#2">Alerts&nbsp;<Tag>3</Tag></a></p>
        <hr>
        <p><a href="#3" class="text-error">Logout</a></p>
    </Button>
</Snippet>


<h5>Open</h5>
<p>The <code>open</code> property sets the state of the dropdown visibility.</p> 
<Snippet code={`
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
`}>
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
</Snippet>

