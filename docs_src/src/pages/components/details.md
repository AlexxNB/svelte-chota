# Details

```example script:hide
<script>
 import { Details } from 'svelte-chota';
</script>
<Details>
    <span slot="summary">StarWars spoiler</span>
    
    Han Solo died...
</Details>
```


### open

The `open` property allows details to be opened by default.

```example script:hide
<script>
 import { Details } from 'svelte-chota';
</script>
<Details open>
    <span slot="summary">The GoT spoiler</span>

    Everybody died...
</Details>
```