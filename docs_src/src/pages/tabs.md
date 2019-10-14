<script>
    import Example from './../cmp/Example.svelte';
    import {Tabs,Tab} from './../../../cmp/index';

    let active_tab = 0;
    let active_tab_2 = 'second';
</script>

# Tabs

### Simple usage

<Example>
    <div slot="text">
        <Tabs bind:active={active_tab}>
            <Tab>Tab1</Tab>
            <Tab>Tab2</Tab>
            <Tab>Tab3</Tab>
        </Tabs>

        Current active tab: {active_tab}
        
    </div>
    <div slot="code">
        ```html
        <script>
            let active_tab = 0;
        </script>

        <Tabs bind:active={active_tab}>
            <Tab>Tab1</Tab>
            <Tab>Tab2</Tab>
            <Tab>Tab3</Tab>
        </Tabs>

        Current active tab: {active_tab}
        ```
    </div>
</Example>


### Property: tabid

<Example>
    <div slot="text">
        <Tabs bind:active={active_tab_2}>
            <Tab tabid="first">Tab1</Tab>
            <Tab tabid="second">Tab2</Tab>
            <Tab tabid="third">Tab3</Tab>
        </Tabs>

        Current active tab: {active_tab_2}

    </div>
    <div slot="code">
        ```html
        <script>
            let active_tab = 'second';
        </script>

        <Tabs bind:active={active_tab}>
            <Tab tabid="first">Tab1</Tab>
            <Tab tabid="second">Tab2</Tab>
            <Tab tabid="third">Tab3</Tab>
        </Tabs>

        Current active tab: {active_tab}
        ```
    </div>
</Example>


### Full width

<Example>
    <div slot="text">
        <Tabs full>
            <Tab>Tab1</Tab>
            <Tab>Tab2</Tab>
            <Tab>Tab3</Tab>
        </Tabs>
    </div>
    <div slot="code">
        ```html
        <Tabs full>
            <Tab>Tab1</Tab>
            <Tab>Tab2</Tab>
            <Tab>Tab3</Tab>
        </Tabs>
        ```
    </div>
</Example>