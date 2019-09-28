import "chota";
import "highlight.js/styles/rainbow.css";
import "./styles/fonts.css";
import "./styles/vars.css";
import "./styles/common.css";

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;