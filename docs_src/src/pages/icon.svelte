<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Icon} from './../../../cmp/index';
    import { mdiCardsSpade,mdiCardsClub,mdiCardsDiamond,mdiCardsHeart,mdiLanguageJavascript } from '@mdi/js';
    const jsicon =`M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,
    19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,
    17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,
    17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,
    19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,
    15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,
    13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,
    12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,
    11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,
    15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,
    17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,
    17.66 15.09,17.06L13.71,17.86Z`;
</script>

<h1>Icon</h1>

<h3>Source</h3>
<p>A <code>src</code> property can be either <i>SVG-path</i>, <i>SVG sprite URL with symbol ID</i> or <i>SVG image URL</i>.</p>
<ul>
    <li><i>SVG-path</i> provided by many npm packages, 
        for example you can use the <a href="https://www.npmjs.com/package/@mdi/js" target="_blank">@mdi/js</a> 
        and choose amoung hundreds of material icons on 
        <a href="https://materialdesignicons.com/" target="_blank">materialdesignicons.com</a>. Or you can use your own SVG-path.
    </li>

    <li><i>SVG sprite URL with symbol ID</i> is a path to the SVG-sprite with specified symbol name. 
    There are a lot of tools to bundle many SVG-files in a single SVG-sprite. 
    For example, you can look on <a href="https://www.npmjs.com/package/rollup-plugin-svg-icons" target="_blank">rollup-plugin-svg-icons</a> package.
    </li>

    <li><i>SVG image's URL</i> is a path to an image which might be located in your assets or in any public libraries 
    like <a href="https://icongr.am/" target="_blank">icongr.am</a>.
    </li>
</ul>

<Snippet code={`
<script>
    import { mdiLanguageJavascript } from '@mdi/js';
    const jsicon =\`M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,
    19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,
    17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,
    17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,
    19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,
    15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,
    13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,
    12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,
    11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,
    15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,
    17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,
    17.66 15.09,17.06L13.71,17.86Z\`;
</script>

<Icon src={jsicon} color="red" size="3"/>
<Icon src={mdiLanguageJavascript} color="red" size="3"/>
<Icon src="icons/javascript.svg" size="3" />
<Icon src="icons/sprite.svg#javascript" size="3" color="green"/>
<Icon src="https://icongr.am/material/language-javascript.svg" size="3" />
`}>
    <Icon src={jsicon} color="red" size="3"/>
    <Icon src={mdiLanguageJavascript} color="orange" size="3"/>
    <Icon src="icons/javascript.svg" size="3" />
    <Icon src="icons/sprite.svg#javascript" size="3" color="green"/>
    <Icon src="https://icongr.am/material/language-javascript.svg" size="3" />
</Snippet>

<h3>Size</h3>
<p>You can set the <code>size</code> property with a CSS-string like <code>36px</code> or just a multiplier for the icon's default size.</p>

<Snippet code={`
<Icon src="https://icongr.am/devicon/ember-original-wordmark.svg" size="2"/>
<Icon src="https://icongr.am/devicon/angularjs-original.svg" size="3"/>
<Icon src="icons/svelte.svg" size="96px" />
<Icon src="https://icongr.am/devicon/vuejs-original.svg" size={6/2}/>
<Icon src="https://icongr.am/devicon/react-original.svg" size={2}/>
`}>
    <Icon src="https://icongr.am/devicon/ember-original-wordmark.svg" size="2"/>
    <Icon src="https://icongr.am/devicon/angularjs-original.svg" size="3"/>
    <Icon src="icons/svelte.svg" size="96px" title="The BEST framework EVER!"/>
    <Icon src="https://icongr.am/devicon/vuejs-original.svg" size={6/2}/>
    <Icon src="https://icongr.am/devicon/react-original.svg" size={2}/>
    
</Snippet>


<h3>Color</h3>
<p><b>Note: a <code>color</code> property can be used when source is <i>SVG-path</i> or <i>SVG sprite</i> only!</b></p>
<p>By default, icon color inhireted from curent text color. But you can specify any color you want.</p>

<Snippet code={`
<script>
    import { mdiCardsSpade,mdiCardsClub,mdiCardsDiamond,mdiCardsHeart } from '@mdi/js';
</script>

<Icon src={mdiCardsSpade} color="black" size="3"/>
<Icon src={mdiCardsClub} color="#000000"  size="3"/>
<Icon src={mdiCardsDiamond} color="red" size="3"/>
<Icon src={mdiCardsHeart} color="rgb(255,0,0)" size="3"/>
`}>
    <Icon src={mdiCardsSpade} color="black" size="3"/>
	<Icon src={mdiCardsClub} color="#000000"  size="3"/>
	<Icon src={mdiCardsDiamond} color="red" size="3"/>
	<Icon src={mdiCardsHeart} color="rgb(255,0,0)" size="3"/>
</Snippet>


<h3>Rotate</h3>
<p>A <code>rotate</code> property is a number of degrees from -360 to 360.</p>

<Snippet code={`
<Icon src="icons/javascript.svg" rotate="-70"  size="2"/>
<Icon src="icons/javascript.svg" rotate="-45"  size="2"/>
<Icon src="icons/javascript.svg" rotate="0"  size="2"/>
<Icon src="icons/javascript.svg" rotate="45"  size="2"/>
<Icon src="icons/javascript.svg" rotate="70"  size="2"/>
`}>
    <Icon src="icons/javascript.svg" rotate="-70"  size="2"/>
    <Icon src="icons/javascript.svg" rotate="-45"  size="2"/>
    <Icon src="icons/javascript.svg" rotate="0"  size="2"/>
    <Icon src="icons/javascript.svg" rotate="45"  size="2"/>
    <Icon src="icons/javascript.svg" rotate="70"  size="2"/>
</Snippet>


<h3>Flip</h3>
<p>You can flip icon vertically with <code>flipV</code> property or horizontally with <code>flipH</code> one.</p>

<Snippet code={`
<Icon src="icons/javascript.svg" size="2"/>
<Icon src="icons/javascript.svg" flipH size="2"/>
<Icon src="icons/javascript.svg" flipV size="2"/>
<Icon src="icons/javascript.svg" flipV flipH size="2"/>
`}>
    <Icon src="icons/javascript.svg" size="2"/>
    <Icon src="icons/javascript.svg" flipH size="2"/>
    <Icon src="icons/javascript.svg" flipV size="2"/>
    <Icon src="icons/javascript.svg" flipV flipH size="2"/>
</Snippet>

<h3>Spin</h3>
<p>It is possible to make spinning icon. The <code>spin</code> is a duration of the full turn in seconds. Default is 2 seconds. </p>
<p>If number is <i>positive</i> then icon will be spin clockwise, and contrclockwise if value is <i>negative</i></p>

<Snippet code={`
<Icon src="icons/svelte.svg" spin="-2" size="2"/>
<Icon src="icons/svelte.svg" spin="-5" size="2"/>
<Icon src="icons/svelte.svg" spin="-10" size="2"/>
<Icon src="icons/svelte.svg" spin size="2"/>
<Icon src="icons/svelte.svg" spin="1" size="2"/>
<Icon src="icons/svelte.svg" spin="0.5" size="2"/>
`}>
    <Icon src="icons/svelte.svg" spin="-2" size="2"/>
    <Icon src="icons/svelte.svg" spin="-5" size="2"/>
    <Icon src="icons/svelte.svg" spin="-10" size="2"/>
    <Icon src="icons/svelte.svg" spin size="2"/>
    <Icon src="icons/svelte.svg" spin="1" size="2"/>
    <Icon src="icons/svelte.svg" spin="0.5" size="2"/>
</Snippet>



