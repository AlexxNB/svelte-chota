<script>
    import {Row,Col} from './../../../cmp/index';
</script>

<Row>
    <Col size="12" sizeLG="7"><slot name="text" /></Col>
    <Col size="12" sizeLG="5"><div class="hlcode"><slot name="code" /></div></Col>
</Row>

<style>
:global(.hljs) {
	border-radius: 5px;
	font-size: 1.2rem;
	line-height: 1.2rem;
	margin:0px;
}

:global(.hlcode pre) {
	background-color: #FFF !important;
    padding:0px;
}
</style>