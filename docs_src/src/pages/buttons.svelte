<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Button,Tag,Row,Col} from './../../../cmp/index';

    import { mdiDelete,mdiAccountPlus,mdiSend,mdiChevronDown } from '@mdi/js'; 
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
<script>
    import { mdiChevronDown } from '@mdi/js';
</script>

<Button dropdown="My Profile" outline iconRight={mdiChevronDown}>
    <p><a href="/">Edit</a></p>
    <p><a href="/">Alerts&nbsp;<Tag>3</Tag></a></p>
    <hr>
    <p><a href="/" class="text-error">Logout</a></p>
</Button>

<Button dropdown="Login" outline>
    <Row>
        <Col size="12"><input placeholder="username"></Col>
        <Col size="12"><input placeholder="password" type="password"></Col>
        <Col size="12" class="is-right">
            <Button clear>Sign up</Button>
            <Button primary>Sign in</Button>
        </Col>
    </Row>
</Button>
`}>
    <Button dropdown="My Profile" outline iconRight={mdiChevronDown}>
        <p><a href="/">Edit</a></p>
        <p><a href="/">Alerts&nbsp;<Tag>3</Tag></a></p>
        <hr>
        <p><a href="/" class="text-error">Logout</a></p>
    </Button>

    <Button dropdown="Login" outline>
        <Row>
            <Col size="12"><input placeholder="username"></Col>
            <Col size="12"><input placeholder="password" type="password"></Col>
            <Col size="12" class="is-right">
                <Button clear>Sign up</Button>
                <Button primary>Sign in</Button>
            </Col>
        </Row>
    </Button>
</Snippet>