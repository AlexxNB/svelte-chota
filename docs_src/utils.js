import fs from 'fs';
import path from 'path';
import {Renderer} from 'svelte-preprocess-markdown';
import hljs from 'highlight.js/lib/highlight';
import xml_lang from 'highlight.js/lib/languages/xml';
import js_lang from 'highlight.js/lib/languages/javascript';
import bash_lang from 'highlight.js/lib/languages/bash';
import css_lang from 'highlight.js/lib/languages/css';
hljs.registerLanguage('xml', xml_lang);
hljs.registerLanguage('javascript', js_lang);
hljs.registerLanguage('bash', bash_lang);
hljs.registerLanguage('css', css_lang);

export function renderer() {

    const r = Renderer();

    r.link = function (href, title, text) {
        let target_attr = '';
        let title_attr = '';
    
        if (href.startsWith("http")) {
            target_attr = ' target="_blank"';
        }
    
        if (title !== null) {
            title_attr = ` title="${title}"`;
        }
    
        return `<a href="${href}"${target_attr}${title_attr}>${text}</a>`;
    }

    return r;
}

export function highlight(code, lang) {
    if(lang === '') console.log(code);
    let result = hljs.highlight(lang,"\n"+code).value;
    result = result.replace(/<span class="(javascript|css)">/g,"$&&nbsp;");
    return result;
}

export function bugremover() {

    const ident_remover = function(text) {
        return text.replace(/(<code[^>]+>)\\n\\t\\t\\t/,'$1').replace(/\\t\\t\\t/g,'');
    }

    return {
        name: 'rollup-plugin-svg-icons',
        writeBundle: async (bundle) => {
            fs.writeFileSync(path.resolve('./public/bundle.js'), bundle['bundle.js'].code.replace(/<pre>.+?<\/pre>/g,ident_remover));
        }
    }
}