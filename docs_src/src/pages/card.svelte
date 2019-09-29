<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Card} from './../../../index';
    import {Button} from './../../../index';
</script>

<h1>Card</h1>

<Snippet code={`
<Card>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. 
    Doloremque cumque velit id.
</Card>
`}>

    <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque cumque velit id.</Card>

</Snippet>

<Snippet code={`
<div style="max-width:300px">
    <Card>
        <h4 slot="header">Card title</h4>

        <p>A nisi ullam impedit molestiae, sapiente id, 
        numquam accusantium eius cum, iste eum iusto 
        blanditiis doloribus beatae. 
        Molestias iste explicabo libero nam, 
        voluptas harum ipsum quod velit enim. 
        Quae, cupiditate?</p>
        
        <div slot="footer" class="is-right">
            <Button clear>Cancel</Button>
            <Button primary>Confirm</Button>
        </div>
    </Card> 
</div>
`}>
    <div style="max-width:300px">
        
        <Card>
            <h4 slot="header">Card title</h4>

            <p>A nisi ullam impedit molestiae, sapiente id, 
            numquam accusantium eius cum, iste eum iusto 
            blanditiis doloribus beatae. 
            Molestias iste explicabo libero nam, 
            voluptas harum ipsum quod velit enim. 
            Quae, cupiditate?</p>
            
            <div slot="footer" class="is-right">
                <Button clear>Cancel</Button>
                <Button primary on:click={()=>console.log('Hi!')}>Confirm</Button>
            </div>
        </Card> 

    </div>
</Snippet>