<h1>Grid</h1>

```example script:hide
<script>
 import {Row,Col} from 'svelte-chota';
</script>
<Row>
    <Col> .col </Col>
</Row>
<Row>
    <Col> .col </Col>
    <Col> .col </Col>
    <Col> .col </Col>
</Row>
```

### Size

You can specify the size of the columns. Property `size` can be *from 1 to 12*.

Each column's size speciefed after how many columns you want out of 12. So if you want 4 columns out of 12, use `size="4"`.

```example script:hide
<script>
 import {Row,Col} from 'svelte-chota';
</script>
<Row>
{#each [1,2,3,4,5,6,7,8,9,10,11,12] as i}
    <Col size="1"> .col </Col>
{/each}
</Row>

<Row>
{#each [1,2,3] as i}
    <Col size="4"> .col </Col>
{/each}
</Row>

<Row>
    <Col size={12}> .col </Col>
</Row>
```

### Responsive grids

We now have responsive grids that work based on device width.

* All columns are 100% for device width under 600px
* `size` for all device sizes >= 600px
* `sizeMD` for >= 900px sizes
* `sizeLG` for >= 1200px sizes

```example script:hide
<script>
 import {Row,Col} from 'svelte-chota';
</script>
<Row>
    <Col size="12" sizeMD="6" sizeLG="4"> 12 / 6 / 4 </Col>
    <Col size="6" sizeMD="3" sizeLG="4"> 6 / 3 / 4 </Col>
    <Col size="6" sizeMD="3" sizeLG="4"> 6 / 3 / 4 </Col>
</Row>

<Row>
    <Col sizeLG="6"> 6 on lg </Col>
    <Col sizeLG="3"> 3 on lg </Col>
    <Col sizeLG="3"> 3 on lg </Col>
</Row>
```


### Mix-n-Match

You can use a combination of flexible and sized columns.

When using a combination, the sized width column takes the size specified and the remaining is filled in by the flexible column.

 ```example script:hide
<script>
 import {Row,Col} from 'svelte-chota';
</script>
<Row>
    <Col size="2"> col 2 </Col>
    <Col size="2"> col 2 </Col>
    <Col> auto </Col>
    <Col size="3"> col 3 </Col>
</Row>

<Row>
    <Col size="10"> col 10 </Col>
    <Col> auto </Col>
</Row>

<Row>
    <Col> auto </Col>
    <Col> auto </Col>
    <div class="is-full-width"></div>
    <Col> auto </Col>
    <Col> auto </Col>
</Row>
```

> **Pro tip:** Create equal-width columns that span multiple rows by inserting a `.is-full-width`(one of the [utility class](utilites)) where you want the columns to break to a new line.


### Reverse Direction

Add `reverse` property to the `Row` to reverse the column direction. 

```example script:hide
<script>
 import {Row,Col} from 'svelte-chota';
</script>
<Row reverse>
    <Col size="5"> col 5 </Col>
    <Col size="4"> col 4 </Col>
    <Col size="3"> col 3 </Col>
</Row>
```
