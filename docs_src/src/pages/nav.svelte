<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Nav} from './../../../cmp/index';
</script>

<h1>Nav</h1>

<Snippet code={`
<Nav>
    <a slot="left" class="active" href="/">Link 1</a>
    <a slot="left" href="/">Link 2</a>

    <a slot="center" href="/" class="brand">LOGO</a>
    
    <a slot="right" href="/">Link 3</a>
    <a slot="right" href="/">Link 4</a>   
</Nav>
`}>
    <Nav>
        <a slot="left" class="active" href="/">Link 1</a>
        <a slot="left" href="/">Link 2</a>
        <a slot="center" href="/" class="brand">LOGO</a>
        <a slot="right" href="/">Link 3</a>
        <a slot="right" href="/">Link 4</a>   
    </Nav>
</Snippet>

<Snippet code={`
<Nav>
    <a slot="left" href="/" class="brand">LOGO</a>
    <a slot="left" class="active" href="/">Link 1</a>
    <a slot="left" href="/">Link 2</a>  
</Nav>
`}>
    <Nav>
        <a slot="left" href="/" class="brand">LOGO</a>
        <a slot="left" class="active" href="/">Link 1</a>
        <a slot="left" href="/">Link 2</a>  
    </Nav>
</Snippet>