<script>
    import Example from './../cmp/Example.svelte';
    import {Button,Modal,Card} from './../../../cmp/index';

    let modal = false;
    let modal2 = false;
</script>

# Modal

<Example>
    <div slot="text">
        <Button on:click={e => modal = true}>Show modal</Button>
        <Modal bind:open={modal}>
            <Card>
                Hello, I am a simple modal.
            </Card>
        </Modal>
    </div>
    <div slot="code">
        ```html
        <script>
            let open = false;
        </script>

        <Button on:click={e => open=true}>Show modal</Button>
        <Modal bind:open>
            <Card>
                Hello, I am a simple modal.
            </Card>
        </Modal>
        ```
    </div>
</Example>

<Example>
    <div slot="text">
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
    </div>
    <div slot="code">
        ```html
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
        ```
    </div>
</Example>