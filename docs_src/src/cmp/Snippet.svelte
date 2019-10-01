<script>
import hljs from 'highlight.js/lib/highlight';
import xml_lang from 'highlight.js/lib/languages/xml';
import js_lang from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('xml', xml_lang);
hljs.registerLanguage('javascript', js_lang);
import {Row,Col} from './../../../index';

export let code = '';
export let lang = 'html';

$: hl_code = hljs.highlight(lang,code.trim());
</script>


<Row>
	<Col size="7">
		<div class="result">
			<slot></slot>
		</div>
	</Col>
	<Col size="5">
		<pre class="hljs">
		{@html hl_code.value}
		</pre>
	</Col>
</Row>



<style>
.hljs{
	border-radius: 5px;
	font-size: 1.2rem;
	line-height: 1.2rem;
	margin:0px;
}


</style>