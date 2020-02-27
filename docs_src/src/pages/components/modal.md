# Modal

```example height:200
<script>
 import { Modal,Button,Card } from 'svelte-chota';
 let open = false;
</script>

<Button on:click={e => open=true}>Show modal</Button>
<Modal bind:open>
    <Card>
        Hello, I am a simple modal.
    </Card>
</Modal>
```


```example height:300
<script>
 import { Modal,Button,Card } from 'svelte-chota';
 let open = false;
 const show = () => open=true;
 const hide = () => open=false;
</script>

<Button on:click={show}>Show modal</Button>
<Modal bind:open>
    <Card>
        <h4 slot="header">Destroy the world</h4>

        <p>Are you sure?</p>
        
        <div slot="footer" class="is-right">
            <Button clear on:click={hide}>Cancel</Button>
            <Button primary on:click={hide}>Confirm</Button>
        </div>
    </Card>
</Modal>
```