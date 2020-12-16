# Modal

```example height:200
<script>
 import { Modal, Button, Card } from 'svelte-chota';
 let modal_open = false;
</script>

<Button on:click={event => modal_open = true}>Show modal</Button>
<Modal bind:open={modal_open}>
    <Card>
        Hello, I am a simple modal.
    </Card>
</Modal>
```


```example height:300
<script>
 import { Modal, Button, Card } from 'svelte-chota';
 let modal_open = false;
 const modal_show = event => modal_open = true;
 const modal_hide = event => modal_open = false;
</script>

<Button on:click={modal_show}>Show modal</Button>
<Modal bind:open={modal_open}>
    <Card>
        <h4 slot="header">Destroy the world</h4>

        <p>Are you sure?</p>
        
        <div slot="footer" class="is-right">
            <Button clear on:click={modal_hide}>Cancel</Button>
            <Button primary on:click={modal_hide}>Confirm</Button>
        </div>
    </Card>
</Modal>
```
