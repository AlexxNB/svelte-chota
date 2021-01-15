# Icon

### Source

A `src` property can be either an *SVG-path*, *SVG sprite URL with symbol ID* or *SVG image URL*.

* *SVG-paths* are provided by many npm packages. For example you can use [@mdi/js](https://www.npmjs.com/package/@mdi/js) and choose from hundreds of material icons on [materialdesignicons.com](https://materialdesignicons.com/). Or you can use your own SVG-path.

* *SVG sprite URL with symbol ID* is a path to the SVG-sprite with a specified symbol name. There are a lot of tools to bundle many SVG-files in a single SVG-sprite. For example, you can look at the [rollup-plugin-svg-icons](https://www.npmjs.com/package/rollup-plugin-svg-icons) package.

* *SVG image's URL* is a path to an image which might be located in your assets or in any public libraries 
    like [icongr.am](https://icongr.am/).


```example 
<script>
    import { Icon } from 'svelte-chota';
    import { mdiLanguageJavascript } from '@mdi/js';
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
<Icon src={jsicon} color="red" size="3"/>
<Icon src={mdiLanguageJavascript} color="orange" size="3"/>
<Icon src="static/icons/javascript.svg" size="3" />
<Icon src="static/icons/sprite.svg#javascript" size="3" color="green"/>
<Icon src="https://icongr.am/material/language-javascript.svg" size="3" />
```

### Size

You can set the `size` property with a CSS-string like `36px` or just a multiplier for the icon's default size.

```example script:hide
<script>
 import { Icon } from 'svelte-chota';
</script>
<Icon src="https://icongr.am/devicon/ember-original-wordmark.svg" size="2"/>
<Icon src="https://icongr.am/devicon/angularjs-original.svg" size="3"/>
<Icon src="static/icons/svelte.svg" size="96px" />
<Icon src="https://icongr.am/devicon/vuejs-original.svg" size={6/2}/>
<Icon src="https://icongr.am/devicon/react-original.svg" size={2}/>
```


### Color

By default, icon color is inherited from the current text color. But you can specify any color you want.

> **Note:** a `color` property can only be used when the source is *SVG-path* or *SVG sprite*!

```example
<script>
 import { Icon } from 'svelte-chota';
 import { mdiCardsSpade,mdiCardsClub,mdiCardsDiamond,mdiCardsHeart } from '@mdi/js';
</script>

<Icon src={mdiCardsSpade} color="black" size="3"/>
<Icon src={mdiCardsClub} color="#000000"  size="3"/>
<Icon src={mdiCardsDiamond} color="red" size="3"/>
<Icon src={mdiCardsHeart} color="rgb(255,0,0)" size="3"/>
```

### Rotate

The `rotate` property is a number of degrees from -360 to 360.

```example script:hide
<script>
 import { Icon } from 'svelte-chota';
</script>
<Icon src="static/icons/javascript.svg" rotate="-100"  size="2"/>
<Icon src="static/icons/javascript.svg" rotate="-55"  size="2"/>
<Icon src="static/icons/javascript.svg" rotate="0"  size="2"/>
<Icon src="static/icons/javascript.svg" rotate="45"  size="2"/>
<Icon src="static/icons/javascript.svg" rotate="70"  size="2"/>
```


### Flip

You can flip an icon vertically with the `flipV` property or horizontally with `flipH`.

```example script:hide
<script>
 import { Icon } from 'svelte-chota';
</script>
<Icon src="static/icons/javascript.svg" size="2"/>
<Icon src="static/icons/javascript.svg" flipH size="2"/>
<Icon src="static/icons/javascript.svg" flipV size="2"/>
<Icon src="static/icons/javascript.svg" flipV flipH size="2"/>
```

### Spin

It is possible to make a spinning icon. `spin` is the duration of the full turn in seconds. Default is 2 seconds. 

If the value is *positive* then the icon will spin clockwise, and counterclockwise if it is *negative*

```example script:hide
<script>
 import { Icon } from 'svelte-chota';
</script>
<Icon src="static/icons/svelte.svg" spin="-2" size="2"/>
<Icon src="static/icons/svelte.svg" spin="-5" size="2"/>
<Icon src="static/icons/svelte.svg" spin="-10" size="2"/>
<Icon src="static/icons/svelte.svg" spin size="2"/>
<Icon src="static/icons/svelte.svg" spin="1" size="2"/>
<Icon src="static/icons/svelte.svg" spin="0.5" size="2"/>
```