<script>
import hljs from 'highlight.js';

export let code = '';

$: hl_code = hljs.highlight('html',code.trim());
</script>

<div>
	<div class="result"><slot></slot></div>
	<div class="hljs">
		{@html hl_code.value}
	</div>
</div>

<style>

</style>