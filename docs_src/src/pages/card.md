<script>
    import Example from './../cmp/Example.svelte';
    import {Card} from './../../../cmp/index';
    import {Button} from './../../../cmp/index';
</script>

# Card

<Example>
    <div slot="text">
        <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque cumque velit id.</Card>
    </div>
    <div slot="code">
        ```html
        <Card>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Doloremque cumque velit id.
        </Card>
        ```
    </div>
</Example>

<Example>
    <div slot="text">
        <div style="max-width:300px">
            <Card>
                <h4 slot="header">Card title</h4>

                A nisi ullam impedit molestiae, sapiente id, 
                numquam accusantium eius cum, iste eum iusto 
                blanditiis doloribus beatae. 
                Molestias iste explicabo libero nam, 
                voluptas harum ipsum quod velit enim. 
                Quae, cupiditate?
                
                <div slot="footer" class="is-right">
                    <Button clear>Cancel</Button>
                    <Button primary on:click={()=>console.log('Hi!')}>Confirm</Button>
                </div>
            </Card>
        </div>
    </div>
    <div slot="code">
        ```html
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
        ```
    </div>
</Example>