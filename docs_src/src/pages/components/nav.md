# Nav


```example script:hide
<script>
 import { Nav } from 'svelte-chota';
</script>

<Nav>
    <a slot="left" class="active" href="/">Link 1</a>
    <a slot="left" href="/">Link 2</a>

    <a slot="center" href="/" class="brand">LOGO</a>

    <a slot="right" href="/">Link 3</a>
    <a slot="right" href="/">Link 4</a>   
</Nav>
```

```example script:hide
<script>
 import { Nav } from 'svelte-chota';
</script>

<Nav>
    <a slot="left" href="/" class="brand">LOGO</a>
    <a slot="left" class="active" href="/">Link 1</a>
    <a slot="left" href="/">Link 2</a>  
</Nav>
```