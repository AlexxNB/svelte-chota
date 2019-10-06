<script>
	import {getEventsAction,getAttributesAction} from './utils';
	import {current_component} from 'svelte/internal';

	const events = getEventsAction(current_component);
	const attrs = getAttributesAction(current_component);

	export let src = null;
	export let size = 1;
	export let color = null;
	export let flipH = null;
	export let flipV = null;
	export let rotate = 0;
	export let spin = false;

	let path = false;
	let use = false;
	let url = false;

	//Icon source
	$: if(!!src && src.toLowerCase().trim().endsWith('.svg')) {
		url = src;
		path = use = false;
	} else if(!!src && src.toLowerCase().trim().includes('.svg#')) {
		use = src;
		url = path = false;
	} else if(!!src) {
		path = src;
		url = use = false;
	}

	// SPIN properties
	$: inverse = (typeof spin !== "boolean" && spin < 0) ? true : false;
	$: spintime = Math.abs(spin === true ? 2 : spin);
	$: spinCW = (!!spin && !inverse);
	$: spinCCW = (!!spin && inverse);

	// size
	if(Number(size)) size = Number(size);
	
	// styles
	const getStyles = () => {
		const transform = [];
		const styles = [];
		if (size !== null) {
			const width = (typeof size === "string") ? size : `${size * 1.5}rem`;
			styles.push(['width',width]);
			styles.push(['height',width]);
		}
		styles.push( ['fill', (color !== null) ? color: 'currentColor'] );
		if (flipH) {
			transform.push("scaleX(-1)");
		}
		if (flipV) {
			transform.push("scaleY(-1)");
		}
		if (rotate != 0) {
			transform.push(`rotate(${rotate}deg)`);
	
		}
		if(transform.length > 0) {
			styles.push( ['transform', transform.join(' ')] );
			styles.push( ['transform-origin', 'center'] );
		}
		return styles.reduce((cur,item)=>{
			return `${cur} ${item[0]}:${item[1]};`;
		},'');
	}
	$: style = getStyles(size,color,flipH,flipV,rotate);
	$: aniStyle = (!!spin) ? `animation-duration: ${spintime}s` : undefined;
</script>

{#if url}
	<span {style} use:events use:attrs={$$props}>
		<img src="{url}" alt="" width="100%" height="100%" class:spinCW class:spinCCW style={aniStyle} />
	</span>
{:else if use}
	<svg viewBox="0 0 24 24" {style} use:events use:attrs={$$props}>
		<use xlink:href={use} class:spinCW class:spinCCW style={aniStyle}></use>
	</svg>
{:else}
	<svg viewBox="0 0 24 24" {style} use:events use:attrs={$$props}>
	{#if spin !== false}
		<g class:spinCW class:spinCCW style={aniStyle}>
			<path d={path}></path>
		</g>
	{:else}
		<path d={path}></path>
	{/if} 
	</svg>
{/if}


<style>
	@keyframes spin { to { transform: rotate(360deg) } }
	@keyframes spin-inverse { to { transform: rotate(-360deg) } }

	svg{
		vertical-align: middle;
	}

	span{
		display: inline-block;
		line-height:1;
	}

	span img{
		padding:0px;
		margin:0px;
		vertical-align: middle;
	}

	.spinCW{
		animation: spin linear 2s infinite;
		transform-origin: center;
	}

	.spinCCW{
		animation: spin-inverse linear 2s infinite;
		transform-origin: center;
	}
</style>