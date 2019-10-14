
import Example from './../cmp/Example.svelte';
import {Details,Button} from './../../../cmp/index';


# Details

<Example>
    <div slot="text">
        <Details>
            <span slot="summary">StarWars spoiler</span>

            Han Solo died...
        </Details>
    </div>
    <div slot="code">
        ```html
        <Details>
            <span slot="summary">StarWars spoiler</span>
            
            Han Solo died...
        </Details>
        ```
    </div>
</Example>

### open

The `open` property allows details to be opened by default.

<Example>
    <div slot="text">
        <Details open>
            <span slot="summary">The GoT spoiler</span>

            Everybody died...
        </Details>
    </div>
    <div slot="code">
        ```html
        <Details open>
            <span slot="summary">The GoT spoiler</span>

            Everybody died...
        </Details>
        ```
    </div>
</Example>