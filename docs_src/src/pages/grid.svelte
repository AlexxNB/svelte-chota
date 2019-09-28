<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Row,Col} from './../../../index';
</script>

<h1>Grid</h1>

<Snippet code={`
<Row>
  <Col> .col </Col>
</Row>
<Row>
  <Col> .col </Col>
  <Col> .col </Col>
  <Col> .col </Col>
</Row>
`}>
<Row>
  <Col class="grid_col"> .col </Col>
</Row>
<Row>
  <Col class="grid_col"> .col </Col>
  <Col class="grid_col"> .col </Col>
  <Col class="grid_col"> .col </Col>
</Row>
</Snippet>

<h3>Size</h3>

<p>You can also specify the size of the columns. Property <code>size</code> can be from 1 to 12.</p>  
<p>Each column's size speciefed after how many columns you want out of 12. So if you want 4 columns out of 12, use <code>size="4"</code>.</p>

<Snippet code={`
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
`}>
<Row>
{#each [1,2,3,4,5,6,7,8,9,10,11,12] as i}
  <Col size="1" class="grid_col"> .col </Col>
{/each}
</Row>

<Row>
{#each [1,2,3] as i}
  <Col size="4" class="grid_col"> .col </Col>
{/each}
</Row>

<Row>
  <Col size={12} class="grid_col"> .col </Col>
</Row>
</Snippet>


<h3>Responsive grids</h3>

<p>We now have responsive grids that work based on device width.</p>
<ul>
    <li>All columns are 100% for device width under 600px</li>
    <li><code>size</code> for all device sizes >= 600px</li>
    <li><code>sizeMD</code> for >= 900px sizes</li>
    <li><code>sizeLG</code> for >= 1200px sizes</li>
</ul>

<Snippet code={`
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
`}>

<Row>
    <Col class="grid_col" size="12" sizeMD="6" sizeLG="4"> 12 / 6 / 4 </Col>
    <Col class="grid_col" size="6" sizeMD="3" sizeLG="4"> 6 / 3 / 4 </Col>
    <Col class="grid_col" size="6" sizeMD="3" sizeLG="4"> 6 / 3 / 4 </Col>
</Row>

<Row>
    <Col class="grid_col" sizeLG="6"> 6 on lg </Col>
    <Col class="grid_col" sizeLG="3"> 3 on lg </Col>
    <Col class="grid_col" sizeLG="3"> 3 on lg </Col>
</Row>

</Snippet>

<h3>Mix-n-Match</h3>

<p>You can use a combination of flexible and sized columns.</p>
<p>When using a combination, the sized width column takes the size specified and the remaining is filled in by the flexible column.</p>

<Snippet code={`
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
`}>
<Row>
    <Col class="grid_col" size="2"> col 2 </Col>
    <Col class="grid_col" size="2"> col 2 </Col>
    <Col class="grid_col"> auto </Col>
    <Col class="grid_col" size="3"> col 3 </Col>
</Row>

<Row>
    <Col class="grid_col" size="10"> col 10 </Col>
    <Col class="grid_col"> auto </Col>
</Row>

<Row>
    <Col class="grid_col"> auto </Col>
    <Col class="grid_col"> auto </Col>
    <div class="is-full-width"></div>
    <Col class="grid_col"> auto </Col>
    <Col class="grid_col"> auto </Col>
</Row>
</Snippet>

<p>
<b>Pro tip:</b> Create equal-width columns that span multiple rows by inserting a <code>.is-full-width</code> 
where you want the columns to break to a new line. Here <code>.is-full-width</code> is one of the utility class.
</p>


<h3>Reverse Direction</h3>

<p>Add <code>reverse</code> property to the <code>Row</code> to reverse the column direction. </p>


<Snippet code={`
<Row reverse>
    <Col size="5"> col 5 </Col>
    <Col size="4"> col 4 </Col>
    <Col size="3"> col 3 </Col>
</Row>
`}>
<Row reverse>
    <Col class="grid_col" size="5"> col 5 </Col>
    <Col class="grid_col" size="4"> col 4 </Col>
    <Col class="grid_col" size="3"> col 3 </Col>
</Row>
</Snippet>

<style>
:global(.grid_col){
    background-color: var(--color-svelte-highlight);
    text-align: center;
}

</style>
