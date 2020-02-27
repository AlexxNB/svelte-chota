# Tabs

### Simple usage

```example
<script>
 import { Tabs,Tab } from 'svelte-chota';
 let active_tab = 0;
</script>

<Tabs bind:active={active_tab}>
    <Tab>Tab1</Tab>
    <Tab>Tab2</Tab>
    <Tab>Tab3</Tab>
</Tabs>

Current active tab: {active_tab}
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