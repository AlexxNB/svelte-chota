# Tabs

### Simple usage

```example
<style>
 p { padding: 2em; background-color: #ddd; }
</style>
<script>
 import { Tabs,Tab } from 'svelte-chota';
 let active_tab = 0;
</script>

<Tabs bind:active={active_tab}>
    <Tab>Tab0</Tab>
    <Tab>Tab1</Tab>
    <Tab>Tab2</Tab>
</Tabs>

<i>current active tab: <b>{active_tab}</b></i>

{#if active_tab == 0}
<p>	
content for Tab0
{/if}

{#if active_tab == 1}
<p>	
Tab1 content here
{/if}

{#if active_tab == 2}
<p>	
here is content for Tab2
{/if}
```



### Property: tabid

```example
<script>
 import { Tabs,Tab } from 'svelte-chota';
 let active_tab = 'second';
</script>

<Tabs bind:active={active_tab}>
    <Tab tabid="first">Tab1</Tab>
    <Tab tabid="second">Tab2</Tab>
    <Tab tabid="third">Tab3</Tab>
</Tabs>

Current active tab: {active_tab}
```


### Full width

```example script:hide
<script>
 import { Tabs,Tab } from 'svelte-chota';
</script>

<Tabs full>
    <Tab>Tab1</Tab>
    <Tab>Tab2</Tab>
    <Tab>Tab3</Tab>
</Tabs>
```
