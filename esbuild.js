const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');
const pkg = require('./package.json');

(async ()=>{
    await esbuild.build({
        entryPoints: ['cmp/index.js'],
        bundle: true,
        outfile: pkg.module,
        format: 'esm',
        minify: true,
        external: [
            'svelte',
            'svelte/*'
        ],
        plugins: [sveltePlugin({compileOptions:{
            dev: false,
            css: true
		}})]
    });

    await esbuild.build({
        entryPoints: ['cmp/index.js'],
        bundle: true,
        outfile: pkg.main,
        format: 'cjs',
        minify: true,
        external: [
            'svelte',
            'svelte/*'
        ],
        plugins: [sveltePlugin({compileOptions:{
            dev: false,
            css: true
		  }})]
    });
})()