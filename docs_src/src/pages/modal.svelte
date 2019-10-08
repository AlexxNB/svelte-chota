<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Button,Modal,Card} from './../../../cmp/index';

    let modal = false;
    let modal2 = false;
</script>

<h1>Modal</h1>

<Snippet code={`
<script>
    let open = false;
</script>

<Button on:click={e => open=true}>Show modal</Button>
<Modal bind:open>
    <Card>
        Hello, I am a simple modal.
    </Card>
</Modal>
`}>
    <Button on:click={e => modal = true}>Show modal</Button>
    <Modal bind:open={modal}>
        <Card>
            Hello, I am a simple modal.
        </Card>
    </Modal>
</Snippet>


<Snippet code={`
<script>
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
`}>
    <Button on:click={e => modal2 = true}>Show modal</Button>
    <Modal bind:open={modal2}>
        <Card>
            <h4 slot="header">Destroy the world</h4>

            <p>Are you sure?</p>
            
            <div slot="footer" class="is-right">
                <Button clear on:click={e => modal2 = false}>Cancel</Button>
                <Button primary on:click={e => modal2 = false}>Confirm</Button>
            </div>
        </Card>
    </Modal>
</Snippet>