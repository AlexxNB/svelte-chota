<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Tabs,Tab} from './../../../cmp/index';

    let active_tab = 0;
    let active_tab_2 = 'second';
</script>

<h1>Tabs</h1>

<h3>Simple usage</h3>

<Snippet code={`
<script>
    let active_tab = 0;
</script>

<Tabs bind:active={active_tab}>
    <Tab>Tab1</Tab>
    <Tab>Tab2</Tab>
    <Tab>Tab3</Tab>
</Tabs>

Current active tab: {active_tab}
`}>
    <Tabs bind:active={active_tab}>
        <Tab>Tab1</Tab>
        <Tab>Tab2</Tab>
        <Tab>Tab3</Tab>
    </Tabs>

    Current active tab: {active_tab}
</Snippet>

<h3>Property: tabid</h3>

<Snippet code={`
<script>
    let active_tab = 'second';
</script>

<Tabs bind:active={active_tab}>
    <Tab tabid="first">Tab1</Tab>
    <Tab tabid="second">Tab2</Tab>
    <Tab tabid="third">Tab3</Tab>
</Tabs>

Current active tab: {active_tab}
`}>
    <Tabs bind:active={active_tab_2}>
        <Tab tabid="first">Tab1</Tab>
        <Tab tabid="second">Tab2</Tab>
        <Tab tabid="third">Tab3</Tab>
    </Tabs>

    Current active tab: {active_tab_2}
</Snippet>

<h3>Full width</h3>

<Snippet code={`
<Tabs full>
    <Tab>Tab1</Tab>
    <Tab>Tab2</Tab>
    <Tab>Tab3</Tab>
</Tabs>
`}>
    <Tabs full>
        <Tab>Tab1</Tab>
        <Tab>Tab2</Tab>
        <Tab>Tab3</Tab>
    </Tabs>
</Snippet>
